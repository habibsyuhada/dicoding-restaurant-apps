import CONFIG from '../globals/config';

class RestaurantItem extends HTMLElement {
  set showSkeleton(toogle){
    if(toogle){
      this.renderSkeleton();
    }
  }

  renderSkeleton() {
    const htmlRestaurantItem = `
      <div class="post-item">
        <img class="lazyload post-item-thumbnail" crossorigin="anonymous" src="images/skeleton-image.jpg" alt="Gambar Restoran">
        <div class="post-item-city skeleton-ui">Loading</div>
        <div class="post-item-content">
          <h1 class="post-item-title skeleton-ui"><a href="#">Loading</a></h1>
          <p class="post-item-rating skeleton-ui"><i class="fa-solid fa-star" aria-label="Rating"></i> Loading</p>
          <p class="post-item-description skeleton-ui">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec neque molestie, semper libero eu, feugiat tortor. Nulla facilisi. Ut ultricies risus feugiat leo posuere, non accumsan nunc mattis. Ut quis luctus quam. Nunc a ante ac eros tempor rhoncus ut sit amet arcu. Vestibulum pellentesque felis lacinia, elementum lorem eget, aliquam libero. Vivamus volutpat velit in tortor maximus, vel sollicitudin justo pharetra. Pellentesque porta non velit ac luctus.</p>
        </div>
      </div>
    `;
    this.innerHTML = htmlRestaurantItem;
  }

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
          <h1 class="post-item-title"><a href="#/detail/${this.d_restaurant.id}">${this.d_restaurant.name}</a></h1>
          <p class="post-item-rating"><i class="fa-solid fa-star" aria-label="Rating"></i> ${this.d_restaurant.rating}</p>
          <p class="post-item-description">${this.d_restaurant.description}</p>
        </div>
      </div>
    `;
    this.innerHTML = htmlRestaurantItem;
  }

  set restaurantskeleton(restaurant) {
    this.d_restaurant = restaurant;
    this.renderFromSkeleton();
  }

  renderFromSkeleton() {
    this.querySelector('.post-item-thumbnail').setAttribute('src', CONFIG.BASE_IMAGE_URL + this.d_restaurant.pictureId);
    this.querySelector('.post-item-thumbnail').setAttribute('alt', `Gambar Restoran ${this.d_restaurant.name}`);
    this.querySelector('.post-item-city').innerHTML = this.d_restaurant.city;
    this.querySelector('.post-item-title a').innerHTML = this.d_restaurant.name;
    this.querySelector('.post-item-title a').setAttribute('href', `#/detail/${this.d_restaurant.id}`);
    this.querySelector('.post-item-rating').innerHTML = `<i class="fa-solid fa-star" aria-label="Rating"></i> ${this.d_restaurant.rating}`;
    this.querySelector('.post-item-description').innerHTML = this.d_restaurant.description;

    this.querySelector('.post-item-city').classList.remove('skeleton-ui');
    this.querySelector('.post-item-title').classList.remove('skeleton-ui');
    this.querySelector('.post-item-rating').classList.remove('skeleton-ui');
    this.querySelector('.post-item-description').classList.remove('skeleton-ui');
  }
}

customElements.define('restaurant-item', RestaurantItem);
