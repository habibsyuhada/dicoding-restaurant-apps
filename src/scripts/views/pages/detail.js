import UrlParser from '../../routes/url-parser';
import RestaurantApiSource from '../../data/restaurant-api-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <section class="content">
        <div class="latest">
          <div id="detail" class="detail">
          </div>
        </div>
      </section>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiSource.detailRestaurant(url.id);

    const restaurantContainer = document.querySelector('.latest');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });

    const btnReview = document.querySelector('#btn-review');

    btnReview.addEventListener('click', async () => {
      const nameInput = document.querySelector('input[name=name]');
      const reviewInput = document.querySelector('textarea[name=review]');

      if (nameInput.value !== '' && reviewInput.value !== '') {
        const reviews = await RestaurantApiSource.addReviewRestaurant({
          id: url.id,
          name: nameInput.value,
          review: reviewInput.value,
        });
      }

      nameInput.value = '';
      reviewInput.value = '';
    });
  },
};

export default Detail;
