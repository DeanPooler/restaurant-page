import { pageload, addContent } from './pageload';
import contact from './contact';
import menu from './menu';

pageload();

const navButtons = document.querySelectorAll('.nav-button');
navButtons.forEach((button) => {
  if (button.id == 'home-button') { button.addEventListener('click', addContent) }
  if (button.id == 'contact-button') { button.addEventListener('click', contact) }
  if (button.id == 'menu-button') { button.addEventListener('click', menu) }
  button.addEventListener('click', () => {
    document.getElementById('content').remove()
  });
});
