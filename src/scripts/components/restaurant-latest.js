import './restaurant-item';

class RestaurantLatest extends HTMLElement {
  set restaurants(restaurants) {
    this.d_restaurants = restaurants;
    this.render();
  }

  render() {
    const htmlRestaurantLatest = `
      <div class="latest">
        <h1 class="latest-label">LATEST</h1>
        <div id="posts" class="posts">
        </div>
      </div>
    `;
    this.innerHTML = htmlRestaurantLatest;

    const posts = this.querySelector('#posts');
    this.d_restaurants.forEach((item) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurant = item;
      posts.append(restaurantItem);
    });
  }
}

customElements.define('restaurant-latest', RestaurantLatest);
