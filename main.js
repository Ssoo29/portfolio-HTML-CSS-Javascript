'use strick';

// Make navbar transparent whein it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeigth = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHeigth) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});