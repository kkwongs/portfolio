const headerNavMenus = document.querySelector('.js-header-nav-menus');

const menus = ['About me', 'Skills', 'Archiving', 'Projects'];

function paintMenu() {
  for (let i = 0; i < menus.length; i++) {
    const div = document.createElement('div');
    div.className = 'header-nav-menu';
    div.innerHTML = menus[i];
    headerNavMenus.appendChild(div);
  }
}

function init() {
  paintMenu();
}

init();
