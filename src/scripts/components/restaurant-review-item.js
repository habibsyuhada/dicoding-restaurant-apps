class RestaurantReviewItem extends HTMLElement {
  set review(review) {
    this.d_review = review;
    this.render();
  }

  render() {
    const htmlRestaurantReviewItem = `
      <div class="review-item">
        <label class="review-item-label">${this.d_review.name} on ${this.d_review.date}</label>
        <p class="review-information-text">${this.d_review.review}</p>
      </div>
    `;
    this.innerHTML = htmlRestaurantReviewItem;
  }
}

customElements.define('restaurant-review-item', RestaurantReviewItem);
