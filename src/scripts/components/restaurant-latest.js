import './restaurant-item';
import './restaurant-item-skeleton';

class RestaurantLatest extends HTMLElement {
  constructor() {
    super();

    let skeleton = '';
    for (let i = 0; i < 20; i++) {
      const restaurantItemSkeleton = document.createElement('restaurant-item');
      restaurantItemSkeleton.showSkeleton = true;
      skeleton += restaurantItemSkeleton.outerHTML;
    }

    this.d_htmlRestaurantLatest = `
      <div class="latest">
        <h1 class="latest-label">LATEST</h1>
        <div id="posts" class="posts">
          ${skeleton}
        </div>
      </div>
    `;
    this.innerHTML = this.d_htmlRestaurantLatest;
  }

  set restaurants(restaurants) {
    this.d_restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = this.d_htmlRestaurantLatest;

    const nodes = document.querySelectorAll('restaurant-item');
    this.d_restaurants.forEach((item, key) => {
      const el = nodes[key];
      el.restaurantskeleton = item;
    });
  }
}

customElements.define('restaurant-latest', RestaurantLatest);
