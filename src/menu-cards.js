import menuItemsTmpl from './templates/menu-items.hbs';
import menuItems from './menu.json';

const menuContainer = document.querySelector('.js-menu');
const menuCardsmarkup = createMenuCardsmarkup(menuItems);

menuContainer.insertAdjacentHTML('beforeend', menuCardsmarkup);

console.log(menuItems);

function createMenuCardsmarkup(menuItems) {
    return menuItemsTmpl(menuItems) ;
}
