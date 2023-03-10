import FavoriteRestaurantIdb from '../data/restaurant-idb';
import '../components/like-button';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    const likeButtonHTML = document.createElement('like-button');
    likeButtonHTML.like = false;
    this._likeButtonContainer.appendChild(likeButtonHTML);

    // this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    // this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    const likeButtonHTML = document.createElement('like-button');
    likeButtonHTML.like = true;
    this._likeButtonContainer.appendChild(likeButtonHTML);

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },

};

export default LikeButtonInitiator;
