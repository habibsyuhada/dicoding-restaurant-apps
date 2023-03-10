class RestaurantFaqItem extends HTMLElement {
  set faq(faq) {
    this.d_faq = faq;
    this.render();
  }

  set faqIndex(faqIndex) {
    this.d_faqIndex = faqIndex;
    this.render();
  }

  render() {
    const htmlRestaurantFaqItem = `
      <li class="faq-item">
        <button class="faq-question" data-toggle="collapse" data-target="collapse${this.d_faqIndex}">
          <i class="fa-regular fa-circle-question"></i> ${this.d_faq.question} 
        </button>
        <div class="faq-answer collapse" data-collapse="collapse${this.d_faqIndex}">
          <p class="faq-answer-text">${this.d_faq.answer} </p>
        </div>
      </li>
    `;
    this.innerHTML = htmlRestaurantFaqItem;
  }
}

customElements.define('restaurant-faq-item', RestaurantFaqItem);
