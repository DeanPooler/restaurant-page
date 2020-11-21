import { pageload, addContent } from './pageload';
import contact from './contact';

pageload();

const navButtons = document.querySelectorAll('.nav-button');
navButtons.forEach((button) => {
  if (button.id == 'home-button') { button.addEventListener('click', addContent) }
  if (button.id == 'contact-button') { button.addEventListener('click', contact); }
  button.addEventListener('click', () => {
    document.getElementById('content').remove()
  });
});


const homeButton = document.getElementById('home-button');
const menuButton = document.getElementById('menu-button');

const contactButton = document.getElementById('contact-button')
