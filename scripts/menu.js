const hamburgerIcon = document.querySelector('.header__hamburger-icon');
const menu = document.querySelector('.header__menu');

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('open');
    menu.classList.toggle('open');
})