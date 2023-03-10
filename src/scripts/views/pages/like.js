import FavoriteRestaurantIdb from '../../data/restaurant-idb';
import '../../components/restaurant-latest';

const NowPlaying = {
  async render() {
    return `
      <section class="content">
        <restaurant-latest><loading-indicator></loading-indicator></restaurant-latest>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    const restaurantPosts = document.querySelector('restaurant-latest');
    restaurantPosts.restaurants = restaurants;
  },
};

export default NowPlaying;
