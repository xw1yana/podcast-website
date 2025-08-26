const mobileLinks = document.querySelectorAll('.header__mobile-menu a');
const burgerToggle = document.getElementById('burger-toggle');
const mobileMenu = document.querySelector('.header__mobile-menu');
const burgerLabel = document.querySelector('label[for="burger-toggle"]');

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerToggle.checked = false;
  });
});

window.addEventListener('scroll', () => {
  burgerToggle.checked = false;
});

