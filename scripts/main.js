'use strict';

const form = document.querySelector('.contacts__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const child of form.children) {
    child.value = '';
  }
});

const menu = document.querySelector('.menu');
const openMenu = document.getElementById('menu');
const closeMenu = document.querySelector('#menu-closer');

const showMenu = () => {
  menu.classList.remove('hidden');
};

const hideMenu = () => {
  menu.classList.add('hidden');
};

openMenu.addEventListener('click', () => {
  showMenu();
});

closeMenu.addEventListener('click', () => {
  hideMenu();
});

const closeMenuLinks = document.querySelectorAll('.close');

for (const menuLink of closeMenuLinks) {
  menuLink.addEventListener('click', () => {
    hideMenu();
  });
}
