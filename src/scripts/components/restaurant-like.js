import './restaurant-item';

class RestaurantLike extends HTMLElement {
  set restaurants(restaurants) {
    this.d_restaurants = restaurants;
    this.render();
  }

  render() {
    const htmlRestaurantLike = `
      <div class="latest">
        <h1 class="latest-label">FAVORITE</h1>
        <div id="posts" class="posts">
        </div>
      </div>
    `;
    this.innerHTML = htmlRestaurantLike;

    const posts = this.querySelector('#posts');
    if (this.d_restaurants.length > 0) {
      this.d_restaurants.forEach((item) => {
        const restaurantItem = document.createElement('restaurant-item');
        restaurantItem.restaurant = item;
        posts.append(restaurantItem);
      });
    } else {
      posts.innerHTML = 'You dont have favorite restaurant.';
    }
  }
}

customElements.define('restaurant-like', RestaurantLike);
