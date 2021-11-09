const headerArea = document.querySelector('.js-header-area');
const headerNavMenus = document.querySelector('.js-header-nav-menus');

const SHOWING_BG = 'header-background';

const menus = ['About me', 'Archive', 'Project'];

function paintMenu() {
  for (let i = 0; i < menus.length; i++) {
    const div = document.createElement('div');
    div.className = 'header-nav-menu';
    div.innerHTML = menus[i];
    headerNavMenus.appendChild(div);
  }
}

function paintBackgorund() {
  document.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop) {
      headerArea.classList.add(SHOWING_BG);
    } else {
      headerArea.classList.remove(SHOWING_BG);
    }
  });
}

function init() {
  paintMenu();
  paintBackgorund();
}

init();
