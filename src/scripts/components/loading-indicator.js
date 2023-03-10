class LoadingIndicator extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <i class="fa-solid fa-circle-notch fa-spin"></i>
    `;
  }
}

customElements.define('loading-indicator', LoadingIndicator);
