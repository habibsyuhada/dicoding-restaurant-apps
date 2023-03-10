import UrlParser from '../../routes/url-parser';
import RestaurantApiSource from '../../data/restaurant-api-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import '../../components/restaurant-detail';

const Detail = {
  async render() {
    return `
      <section class="content">
        <restaurant-detail><loading-indicator></loading-indicator></restaurant-detail>
      </section>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    try {
      const restaurant = await RestaurantApiSource.detailRestaurant(url.id);

      const restaurantDetail = document.querySelector('restaurant-detail');
      restaurantDetail.restaurant = restaurant;

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
    } catch (message) {
      alert(message);
    }
  },
};

export default Detail;
