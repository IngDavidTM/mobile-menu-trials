const menu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('x-button');
const openMenu = document.getElementById('menu-bars');
const link = document.querySelectorAll('.nav-link-mobile');

link.forEach((element) => {
  element.addEventListener('click', () => {
    menu.style.display = 'none';
  });
});

closeMenu.addEventListener('click', () => {
  menu.style.display = 'none';
});
openMenu.addEventListener('click', () => {
  menu.style.display = 'flex';
});
