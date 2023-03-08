import FavoriteRestaurantIdb from '../../data/restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
      <section class="content">
        <div class="latest">
          <h1 class="latest-label">FAVORITE</h1>
          <div id="posts" class="posts">
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const latestContainer = document.querySelector('#posts');

    restaurants.forEach((restaurant) => {
      latestContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default NowPlaying;
