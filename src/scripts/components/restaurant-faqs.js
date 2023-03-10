import './restaurant-faq-item';

class RestaurantFaqs extends HTMLElement {
  set faqs(faqs) {
    this.d_faqs = faqs;
    this.render();
  }

  render() {
    const htmlRestaurantFaqs = `
      <div class="latest">
        <h1 class="latest-label">FREQUENTLY ASKED QUESTIONS</h1>
        <div class="faqs">
          <ul id="faqs" class="faq-list">
          </ul>
        </div>
      </div>
    `;
    this.innerHTML = htmlRestaurantFaqs;

    const posts = this.querySelector('#faqs');
    this.d_faqs.forEach((item, index) => {
      const restaurantFaqItem = document.createElement('restaurant-faq-item');
      restaurantFaqItem.faq = item;
      restaurantFaqItem.faqIndex = index;
      posts.append(restaurantFaqItem);
    });

    const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));
    triggers.forEach((element) => {
      element.addEventListener('click', () => {
        const targetClose = Array.from(document.querySelectorAll('[data-collapse]'));
        const selector = element.getAttribute('data-target');
        const targets = Array.from(document.querySelectorAll(`[data-collapse="${selector}"]`));

        targetClose.forEach((target) => {
          if (!targets.includes(target)) {
            target.classList.remove('show');
          }
        });
        targets.forEach((target) => {
          target.classList.toggle('show');
        });
      });
    });
  }
}

customElements.define('restaurant-faqs', RestaurantFaqs);
