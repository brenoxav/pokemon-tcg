import './style.css';
import renderCardsList from './home.js';
import renderCardsPopUp from './comments.js'
import logoImg from './images/pokeball-logo.png';

const logoItem = document.querySelector('.logo-item');
const logo = document.createElement('img');
logo.src = logoImg;
logo.classList.add('logo');

logoItem.appendChild(logo);

window.addEventListener('load', () => {
  renderCardsList()
});