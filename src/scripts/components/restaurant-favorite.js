import CONFIG from '../globals/config';

class RestaurantFavorite extends HTMLElement {
  // constructor() {
  //   super();
  //   this.d_htmlRestaurantLatest = `
  //     <div class="latest">
  //       <h1 class="latest-label">FAVORITE</h1>
  //       <div id="favorites" class="favorites">
  //         <div class="favorite-item">
  //           <img class="lazyload favorite-item-thumbnail" crossorigin="anonymous" src="images/skeleton-image.jpg" alt="Gambar Restoran">
  //           <div class="favorite-item-city skeleton-ui">Loading</div>
  //           <div class="favorite-item-content">
  //             <h1 class="favorite-item-title skeleton-ui"><a href="#">Loading</a></h1>
  //             <p class="favorite-item-rating skeleton-ui"><i class="fa-solid fa-star" aria-label="Rating"></i>Loading</p>
  //             <p class="favorite-item-description skeleton-ui">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec neque molestie, semper libero eu, feugiat tortor. Nulla facilisi. Ut ultricies risus feugiat leo posuere, non accumsan nunc mattis. Ut quis luctus quam. Nunc a ante ac eros tempor rhoncus ut sit amet arcu. Vestibulum pellentesque felis lacinia, elementum lorem eget, aliquam libero. Vivamus volutpat velit in tortor maximus, vel sollicitudin justo pharetra. Pellentesque porta non velit ac luctus.</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   `;
  //   this.innerHTML = this.d_htmlRestaurantLatest;
  // }

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
            <img class="lazyload favorite-item-thumbnail" src="${CONFIG.BASE_IMAGE_URL + this.d_restaurant.pictureId}" alt="Gambar Restoran ${this.d_restaurant.name}">
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
