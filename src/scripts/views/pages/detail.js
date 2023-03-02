import UrlParser from '../../routes/url-parser';
import RestaurantApiSource from '../../data/restaurant-api-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
// import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant">
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiSource.detailRestaurant(url.id);
    console.log("restaurant");
    console.log(restaurant);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    // LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   restaurant: {
    //     id: restaurant.id,
    //     // title: restaurant.title,
    //     // overview: restaurant.overview,
    //     // backdrop_path: restaurant.backdrop_path,
    //     // vote_average: restaurant.vote_average,
    //   },
    // });
  },
};

export default Detail;
