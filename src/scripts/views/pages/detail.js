import UrlParser from '../../routes/url-parser';
import RestaurantApiSource from '../../data/restaurant-api-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
// import LikeButtonInitiator from '../../utils/like-button-initiator';

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
    console.log(restaurant);
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
