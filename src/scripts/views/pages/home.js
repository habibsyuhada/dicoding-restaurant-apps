import RestaurantApiSource from '../../data/restaurant-api-source';
import data from '../../../DATA.json';
import '../../components/restaurant-latest';
import '../../components/restaurant-favorite';
import '../../components/restaurant-faqs';

const NowPlaying = {
  async render() {
    return `
      <div class="hero">
        <picture>
          <source media="(max-width: 650px)" srcset="../images/heros/hero-image-small.jpg" type="image/jpeg">
          <source media="(min-width: 650px)" srcset="../images/heros/hero-image-medium.jpg" type="image/jpeg">
          <source media="(min-width: 1200px)" srcset="../images/heros/hero-image-large.jpg" type="image/jpeg">
          <img
            src="../images/heros/hero-image-large.jpg" 
            alt=""
          />
        </picture>
        <div class="hero-text"><h2>RESTAURANT FINDER</h2></div>
      </div>
      <section class="content">
        <restaurant-favorite><loading-indicator></loading-indicator></restaurant-favorite>
        <restaurant-latest><loading-indicator></loading-indicator></restaurant-latest>
        <restaurant-faqs><loading-indicator></loading-indicator></restaurant-faqs>
      </section>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await RestaurantApiSource.listRestaurant();

      const restaurantPosts = document.querySelector('restaurant-latest');
      restaurantPosts.restaurants = restaurants;

      const restaurantFavorite = document.querySelector('restaurant-favorite');
      const [foo] = restaurants;
      restaurantFavorite.restaurant = foo;

      const restaurantFaqs = document.querySelector('restaurant-faqs');
      restaurantFaqs.faqs = data.faqs;
    } catch (message) {
      alert(message);
    }
  },
};

export default NowPlaying;
