new WOW().init();
const windowWidth = document.body.clientWidth;
const navbar = document.querySelector('.navbar-block__links')
const burger = document.querySelector('.navbar-hamb');
const navbarBrands = document.querySelector('.navbar-brands');
const burgerMenu = document.querySelector('.navbar-hamb__burger')
const stagingBodyImg = document.querySelector('.staging-body__img');
const stagingBodyImages = document.querySelectorAll('.staging-body__img');
let valueOfSwiper2 = 4;
let valueOfSwiper3 = 1.3;
let menuOpen = false;

if(windowWidth < 1200) {
    valueOfSwiper2 = 1.5;
}
if(windowWidth > 1200) {
    valueOfSwiper3 = 4;
}

let mySwiper2 = new Swiper('#swiper-container2', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: valueOfSwiper2,
});
let mySwiper3 = new Swiper('#swiper-container3', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: valueOfSwiper3,
});
burger.addEventListener('click', () => {
    if(!menuOpen) {
        burger.classList.add('open');
        menuOpen = true;
    }else {
        burger.classList.remove('open')
        menuOpen = false;
    };
    navbar.classList.toggle('navbar-active');
    navbarBrands.classList.toggle('active')
})