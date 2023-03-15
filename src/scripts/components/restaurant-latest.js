import './restaurant-item';
import './restaurant-item-skeleton';

class RestaurantLatest extends HTMLElement {
  constructor() {
    super();

    const skeleton = this.renderSkeleton();
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

  renderSkeleton(){
    let skeletonHtml = '';
    for (let i = 0; i < 20; i++) {
      const restaurantItemSkeleton = document.createElement('restaurant-item');
      restaurantItemSkeleton.showSkeleton = true;
      skeletonHtml += restaurantItemSkeleton.outerHTML;
    }
    return skeletonHtml;
  }

  render() {
    this.innerHTML = this.d_htmlRestaurantLatest;

    const posts = this.querySelector('#posts');
    let nodes = document.querySelectorAll("restaurant-item");
    this.d_restaurants.forEach((item, key) => {
      let el = nodes[key];
      el.restaurantskeleton = item;
    });
  }
}

customElements.define('restaurant-latest', RestaurantLatest);
