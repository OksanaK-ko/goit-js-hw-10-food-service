import './styles.css';
import menuItemsTmpl from './templates/menu-items.hbs';
import menuItems from './menu.json';
import { menuContainer, bodyTheme, themeSwitcher } from './container';

const menuCardsmarkup = createMenuCardsmarkup(menuItems);
menuContainer.insertAdjacentHTML('beforeend', menuCardsmarkup);

console.log(menuItems);

function createMenuCardsmarkup(menuItems) {
    return menuItemsTmpl(menuItems);
}
  
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeSwitcher.addEventListener('change', onInputChange);
function onInputChange(evt) {
    if (evt.target.checked) {
        bodyTheme.classList.toggle(Theme.DARK);
        localStorage.setItem('theme-mode', 'dark');
    }
    else {
        bodyTheme.classList.add(Theme.LIGHT)
        bodyTheme.classList.remove(Theme.DARK)
        localStorage.setItem('theme-mode', 'light');
    }
}

document.addEventListener('DOMContentLoaded', themeCheck);
function themeCheck() {
    
    if (localStorage.getItem('theme-mode') === 'dark') {
        bodyTheme.classList.add(Theme.DARK);  
        themeSwitcher.checked = true;
    }
    else {
        bodyTheme.classList.add(Theme.LIGHT);    
        themeSwitcher.checked = false;
    }
}


