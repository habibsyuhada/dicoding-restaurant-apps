import './restaurant-menu-item';

class RestaurantMenu extends HTMLElement {
  set menus(menus) {
    this.d_menus = menus;
    this.render();
  }

  render() {
    const htmlRestaurantMenu = `
      <ul class='detail-information-menu'>
      </ul>
    `;
    this.innerHTML = htmlRestaurantMenu;

    const posts = this.querySelector('.detail-information-menu');
    this.d_menus.forEach((item) => {
      const restaurantMenuItem = document.createElement('restaurant-menu-item');
      restaurantMenuItem.menu = item;
      posts.append(restaurantMenuItem);
    });
  }
}

customElements.define('restaurant-menu', RestaurantMenu);
