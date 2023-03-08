import RestaurantApiSource from '../../data/restaurant-api-source';
import data from '../../../DATA.json';
import { createRestaurantItemTemplate, createFavoriteItemTemplate, createFaqItemTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
      <div class="hero">
        <img src="images/heros/hero-image_2.jpg" alt="">
        <div class="hero-text"><h2>RESTAURANT FINDER</h2></div>
      </div>
      <section class="content">
        <div class="latest">
          <h1 class="latest-label">FAVORITE</h1>
          <div id="favorites" class="favorites">
          </div>
        </div>
        <div class="latest">
          <h1 class="latest-label">LATEST</h1>
          <div id="posts" class="posts">
          </div>
        </div>
        <div class="latest">
          <h1 class="latest-label">FREQUENTLY ASKED QUESTIONS</h1>
          <div class="faqs">
            <ul id="faqs" class="faq-list">
            </ul>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantApiSource.listRestaurant();

    const latestContainer = document.querySelector('#posts');
    restaurants.forEach((restaurant) => {
      latestContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    const favoritesContainer = document.querySelector('#favorites');
    favoritesContainer.innerHTML = createFavoriteItemTemplate(restaurants[0]);

    const faqsContainer = document.querySelector('#faqs');
    let faqList = '';
    data.faqs.forEach((faq, index) => {
      faqList += createFaqItemTemplate(faq, index);
    });
    faqsContainer.innerHTML = faqList;

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
  },
};

export default NowPlaying;
