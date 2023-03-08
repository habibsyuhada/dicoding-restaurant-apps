import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <article class="post-item">
    <img class="post-item-thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Gambar Restoran ${restaurant.name}">
    <div class="post-item-city">${restaurant.city}</div>
    <div class="post-item-content">
      <h1 class="post-item-title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
      <p class="post-item-rating"><i class="fa-solid fa-star" aria-label="Rating"></i> ${restaurant.rating}</p>
      <p class="post-item-description">${restaurant.description}</p>
    </div>
  </article>
`;

const createFavoriteItemTemplate = (restaurant) => `
  <article class="favorite-item">
    <img class="favorite-item-thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Gambar Restoran ${restaurant.name}">
    <div class="favorite-item-city">${restaurant.city}</div>
    <div class="favorite-item-content">
      <h1 class="favorite-item-title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
      <p class="favorite-item-rating"><i class="fa-solid fa-star" aria-label="Rating"></i> ${restaurant.rating}</p>
      <p class="favorite-item-description">${restaurant.description}</p>
    </div>
  </article>
`;

const createFaqItemTemplate = (faq, index) => `
  <li class="faq-item">
    <button class="faq-question" data-toggle="collapse" data-target="collapse${index}">
      <i class="fa-regular fa-circle-question"></i> ${faq.question} 
    </button>
    <div class="faq-answer collapse" data-collapse="collapse${index}">
      <p class="faq-answer-text">${faq.answer} </p>
    </div>
  </li>
`;

const createRestaurantDetailTemplate = (restaurant) => {
  let foods_menu = ``;
  restaurant.menus.foods.forEach(food => {
    foods_menu += `<li>${food.name}</li>`;
  });
  foods_menu = `<ul class='detail-information-menu'>${foods_menu}</ul>`;

  let drinks_menu = ``;
  restaurant.menus.drinks.forEach(drink => {
    drinks_menu += `<li>${drink.name}</li>`;
  });
  drinks_menu = `<ul class='detail-information-menu'>${drinks_menu}</ul>`;

  let reviews = ``;
  restaurant.customerReviews.forEach(review => {
    reviews += `
      <div class="review-item">
        <label class="review-item-label">${review.name} on ${review.date}</label>
        <p class="review-information-text">${review.review}</p>
      </div>
    `;
  });
  reviews = `<div class="review-list">${reviews}</div>`;
  
  return `
  <div class="detail-container">
    <div class="detail">
      <h1 class="detail-title">${restaurant.name}</h1>
      <img class="detail-picture" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Gambar Restoran ${restaurant.name}">

      <h3>Detail Information</h3>
      <div class="detail-information">
        <div>
          <label class="detail-information-label">Name:</label>
          <p class="detail-information-text">${restaurant.name}</p>
        </div>
        <div>
          <label class="detail-information-label">Address:</label>
          <p class="detail-information-text">${restaurant.address}</p>
        </div>
        <div>
          <label class="detail-information-label">City:</label>
          <p class="detail-information-text">${restaurant.city}</p>
        </div>
        <div>
          <label class="detail-information-label">Description:</label>
          <p class="detail-information-text">${restaurant.description}</p>
        </div>
        <div>
          <label class="detail-information-label">Foods Menu:</label>
          ${foods_menu}
        </div>
        <div>
          <label class="detail-information-label">Drinks Menu:</label>
          ${drinks_menu}
        </div>
      </div>
    </div>
    <div class="review">
      <h1 class="review-title">Customer Reviews</h1>
      ${reviews}
    </div>
  </div>
`
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa-regular fa-heart"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa-solid fa-heart"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createFavoriteItemTemplate,
  createFaqItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
