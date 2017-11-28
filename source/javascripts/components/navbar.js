function navbarAnimation() {
  const navbar = document.querySelector('#navbar');
  const menu = document.querySelector('#navbar .menu');
  const menuContent = document.querySelector('#menu-content');

  function toogleClassActive() {
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
      menuContent.classList.remove('active');
    } else {
      menu.classList.add('active');
      menuContent.classList.add('active');
    }
  }

  menu.addEventListener('click', toogleClassActive)
}

export { navbarAnimation }
