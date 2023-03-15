import './restaurant-item';
import './restaurant-item-skeleton';

class RestaurantLatest extends HTMLElement {
  constructor() {
    super();
    this.d_htmlRestaurantLatest = `
      <div class="latest">
        <h1 class="latest-label">LATEST</h1>
        <div id="posts" class="posts">
        </div>
      </div>
    `;
    this.innerHTML = this.d_htmlRestaurantLatest;
    this.renderSkeleton();
  }

  set restaurants(restaurants) {
    this.d_restaurants = restaurants;
    this.render();
  }

  renderSkeleton(){
    const posts = this.querySelector('#posts');
    for (let i = 0; i < 20; i++) {
      const restaurantItemSkeleton = document.createElement('restaurant-item-skeleton');
      restaurantItemSkeleton.show = true;
      posts.append(restaurantItemSkeleton);
    }
  }

  render() {
    this.innerHTML = this.d_htmlRestaurantLatest;

    const posts = this.querySelector('#posts');
    this.d_restaurants.forEach((item) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurant = item;
      posts.append(restaurantItem);
    });
  }
}

customElements.define('restaurant-latest', RestaurantLatest);
