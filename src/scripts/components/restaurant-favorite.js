import CONFIG from '../globals/config';

class RestaurantFavorite extends HTMLElement {
  set restaurant(restaurant) {
    this.d_restaurant = restaurant;
    this.render();
  }

  render() {
    const htmlRestaurantFavorite = `
      <div class="latest">
        <h1 class="latest-label">FAVORITE</h1>
        <div id="favorites" class="favorites">
          <div class="favorite-item">
            <img class="favorite-item-thumbnail" src="${CONFIG.BASE_IMAGE_URL + this.d_restaurant.pictureId}" alt="Gambar Restoran ${this.d_restaurant.name}">
            <div class="favorite-item-city">${this.d_restaurant.city}</div>
            <div class="favorite-item-content">
              <h1 class="favorite-item-title"><a href="/#/detail/${this.d_restaurant.id}">${this.d_restaurant.name}</a></h1>
              <p class="favorite-item-rating"><i class="fa-solid fa-star" aria-label="Rating"></i> ${this.d_restaurant.rating}</p>
              <p class="favorite-item-description">${this.d_restaurant.description}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    this.innerHTML = htmlRestaurantFavorite;
  }
}

customElements.define('restaurant-favorite', RestaurantFavorite);
