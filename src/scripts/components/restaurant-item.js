import CONFIG from '../globals/config';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this.d_restaurant = restaurant;
    this.render();
  }

  render() {
    const htmlRestaurantItem = `
      <div class="post-item">
        <img class="lazyload post-item-thumbnail" crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL + this.d_restaurant.pictureId}" alt="Gambar Restoran ${this.d_restaurant.name}">
        <div class="post-item-city">${this.d_restaurant.city}</div>
        <div class="post-item-content">
          <h1 class="post-item-title"><a href="/#/detail/${this.d_restaurant.id}">${this.d_restaurant.name}</a></h1>
          <p class="post-item-rating"><i class="fa-solid fa-star" aria-label="Rating"></i> ${this.d_restaurant.rating}</p>
          <p class="post-item-description">${this.d_restaurant.description}</p>
        </div>
      </div>
    `;
    this.innerHTML = htmlRestaurantItem;
  }
}

customElements.define('restaurant-item', RestaurantItem);
