import 'regenerator-runtime'; /* for async await transpile */
// import '../styles/main.css';
import '../styles/main.scss';
import '../DATA.json';


const data = require('../DATA.json');
const menu = document.querySelector('#menu');
const drawer = document.querySelector('#drawer');
const posts = document.querySelector('#posts');
const favorites = document.querySelector('#favorites');
const faqs = document.querySelector('#faqs');

menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

let post_list = '';
data.restaurants.forEach((value, index) => {
  post_list += `<article class="post-item">
    <img class="post-item-thumbnail" src="${value.pictureId}" alt="Gambar Restoran ${value.name}">
    <div class="post-item-city">${value.city}</div>
    <div class="post-item-content">
      <h1 class="post-item-title"><a href="#">${value.name}</a></h1>
      <p class="post-item-rating"><i class="fa-solid fa-star" aria-label="Rating"></i> ${value.rating}</p>
      <p class="post-item-description">${value.description}</p>
    </div>
  </article>`
});
posts.innerHTML = post_list;

let favorite = data.restaurants[Math.floor(Math.random() * data.restaurants.length)];
favorites.innerHTML = `
  <article class="favorite-item">
    <img class="favorite-item-thumbnail" src="${favorite.pictureId}" alt="Gambar Restoran ${favorite.name}">
    <div class="favorite-item-city">${favorite.city}</div>
    <div class="favorite-item-content">
      <h1 class="favorite-item-title"><a href="#">${favorite.name}</a></h1>
      <p class="favorite-item-rating"><i class="fa-solid fa-star" aria-label="Rating"></i> ${favorite.rating}</p>
      <p class="favorite-item-description">${favorite.description}</p>
    </div>
  </article>
`;

let faq_list = '';
data.faqs.forEach((value, index) => {
  faq_list += `
    <li class="faq-item">
      <button class="faq-question" data-toggle="collapse" data-target="collapse${index}">
        <i class="fa-regular fa-circle-question"></i> ${value.question} 
      </button>
      <div class="faq-answer collapse" data-collapse="collapse${index}">
        <p class="faq-answer-text">${value.answer} </p>
      </div>
    </li>
  `;
});
faqs.innerHTML = faq_list;

document.addEventListener("DOMContentLoaded", function(event) {
  const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));
  triggers.forEach((element, index) => {
    element.addEventListener('click', () => {
      const target_close = Array.from(document.querySelectorAll('[data-collapse]'));
      const selector = element.getAttribute('data-target');
      const targets = Array.from(document.querySelectorAll(`[data-collapse="${selector}"]`));

      target_close.forEach(target => {
        if(!targets.includes(target)){
          target.classList['remove']('show');
        }
      });
      targets.forEach(target => {
        target.classList['toggle']('show');
      });
    })
  });
});