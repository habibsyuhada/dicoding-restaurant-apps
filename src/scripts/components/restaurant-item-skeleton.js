class RestaurantItemSkeleton extends HTMLElement {
  constructor() {
    super();

    console.log('asdasdasd');

    this.d_innerHtml = `
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
  }

  set show(toogle){
    if(toogle){
      this.innerHTML = this.d_innerHtml;
    }
  }
}

customElements.define('restaurant-item-skeleton', RestaurantItemSkeleton);
