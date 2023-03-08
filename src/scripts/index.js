import 'regenerator-runtime';
import '../styles/main.scss';
import '../DATA.json';
import App from './views/app';

const menu = document.querySelector('#menu');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
});
