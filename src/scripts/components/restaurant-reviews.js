import './restaurant-review-item';

class RestaurantReviews extends HTMLElement {
  set reviews(reviews) {
    this.d_reviews = reviews;
    this.render();
  }

  render() {
    const htmlRestaurantReviews = `
      <div class="review-list">
      </div>
    `;
    this.innerHTML = htmlRestaurantReviews;

    const posts = this.querySelector('.review-list');
    this.d_reviews.forEach((item) => {
      const restaurantReviewItem = document.createElement('restaurant-review-item');
      restaurantReviewItem.review = item;
      posts.append(restaurantReviewItem);
    });
  }
}

customElements.define('restaurant-reviews', RestaurantReviews);
