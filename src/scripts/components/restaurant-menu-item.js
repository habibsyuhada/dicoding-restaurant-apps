class RestaurantMenuItem extends HTMLElement {
  set menu(menu) {
    this.d_menu = menu;
    this.render();
  }

  render() {
    const htmlRestaurantMenuItem = `
      <li>${this.d_menu.name}</li>
    `;
    this.innerHTML = htmlRestaurantMenuItem;
  }
}

customElements.define('restaurant-menu-item', RestaurantMenuItem);
