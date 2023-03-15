import 'regenerator-runtime';
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import '../styles/main.scss';
import '../DATA.json';
import './components/loading-indicator';
import App from './views/app';
import swRegister from './utils/sw-register';

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
  swRegister();
  // document.querySelector('#loader').style.display = 'none';
});
