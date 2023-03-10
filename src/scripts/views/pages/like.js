import FavoriteRestaurantIdb from '../../data/restaurant-idb';
import '../../components/restaurant-like';

const NowPlaying = {
  async render() {
    return `
      <section class="content">
        <restaurant-like><loading-indicator></loading-indicator></restaurant-like>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    const restaurantPosts = document.querySelector('restaurant-like');
    restaurantPosts.restaurants = restaurants;
  },
};

export default NowPlaying;
