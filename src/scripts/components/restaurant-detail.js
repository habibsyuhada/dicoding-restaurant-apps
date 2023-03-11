import CONFIG from '../globals/config';
import RestaurantApiSource from '../data/restaurant-api-source';
import UrlParser from '../routes/url-parser';
import './restaurant-reviews';
import './restaurant-menu';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this.d_restaurant = restaurant;
    this.render();
  }

  render() {
    const htmlRestaurantDetail = `
      <div class="latest">
        <div id="detail" class="detail">
          <div class="detail-container">
            <div class="detail">
              <h1 class="detail-title">${this.d_restaurant.name}</h1>
              <img class="detail-picture" crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL + this.d_restaurant.pictureId}" alt="Gambar Restoran ${this.d_restaurant.name}">
      
              <h3>Detail Information</h3>
              <div class="detail-information">
                <div>
                  <label class="detail-information-label">Name:</label>
                  <p class="detail-information-text">${this.d_restaurant.name}</p>
                </div>
                <div>
                  <label class="detail-information-label">Address:</label>
                  <p class="detail-information-text">${this.d_restaurant.address}</p>
                </div>
                <div>
                  <label class="detail-information-label">City:</label>
                  <p class="detail-information-text">${this.d_restaurant.city}</p>
                </div>
                <div>
                  <label class="detail-information-label">Rating:</label>
                  <p class="detail-information-text">${this.d_restaurant.rating}</p>
                </div>
                <div class="detail-information-description">
                  <label class="detail-information-label">Description:</label>
                  <p class="detail-information-text">${this.d_restaurant.description}</p>
                </div>
                <div>
                  <label class="detail-information-label">Foods Menu:</label>
                  <restaurant-menu class="foods-menu"></restaurant-menu>
                </div>
                <div>
                  <label class="detail-information-label">Drinks Menu:</label>
                  <restaurant-menu class="drinks-menu"></restaurant-menu>
                </div>
              </div>
            </div>
            <div class="review">
              <h1 class="review-title">Customer Reviews</h1>
              <restaurant-reviews></restaurant-reviews>
              <br>
              <div class="review-input">
                <div class="form-group">
                  <label>Name :</label>
                  <input type="text" name="name" class="form-control">
                </div>
                <div class="form-group">
                  <label>Review :</label>
                  <textarea name="review" class="form-control"></textarea>
                </div>
                <div class="form-group">
                  <button class="btn-review" id="btn-review"><i class="fas fa-check"></i> Submit New Review</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    this.innerHTML = htmlRestaurantDetail;

    const restaurantFoodsMenu = document.querySelector('restaurant-menu.foods-menu');
    restaurantFoodsMenu.menus = this.d_restaurant.menus.foods;

    const restaurantDrinksMenu = document.querySelector('restaurant-menu.drinks-menu');
    restaurantDrinksMenu.menus = this.d_restaurant.menus.drinks;

    const restaurantReviews = document.querySelector('restaurant-reviews');
    restaurantReviews.reviews = this.d_restaurant.customerReviews;

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const btnReview = document.querySelector('#btn-review');

    btnReview.addEventListener('click', async () => {
      const nameInput = document.querySelector('input[name=name]');
      const reviewInput = document.querySelector('textarea[name=review]');

      if (nameInput.value !== '' && reviewInput.value !== '') {
        try {
          const reviewsNew = await RestaurantApiSource.addReviewRestaurant({
            id: url.id,
            name: nameInput.value,
            review: reviewInput.value,
          });
          restaurantReviews.reviews = reviewsNew;
        } catch (message) {
          alert(message);
        }
      }

      nameInput.value = '';
      reviewInput.value = '';
    });
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
