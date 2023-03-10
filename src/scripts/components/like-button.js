class LikeButton extends HTMLElement {
  set like(like) {
    this.d_like = like;
    this.render();
  }

  render() {
    const htmlLikeButton = `
      <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa-regular fa-heart"></i>
      </button>
    `;
    const htmlLikedButton = `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa-solid fa-heart"></i>
    </button>
    `;
    if (this.d_like === false) {
      this.innerHTML = htmlLikeButton;
    } else {
      this.innerHTML = htmlLikedButton;
    }
  }
}

customElements.define('like-button', LikeButton);
