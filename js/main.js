new WOW().init();
const windowWidth = document.body.clientWidth;
const navbar = document.querySelector('.navbar-block__links')
const burger = document.querySelector('.navbar-hamb');
const navbarBrands = document.querySelector('.navbar-brands');
const burgerMenu = document.querySelector('.navbar-hamb__burger')
const stagingBodyImg = document.querySelector('.staging-body__img');
const stagingBodyImages = document.querySelectorAll('.staging-body__img');
let valueOfSwiper2 = 4;
let valueOfSwiper3 = 1.74;
let menuOpen = false;
if(windowWidth > 1200) {
    valueOfSwiper2 = 4
}else if(windowWidth < 1200 && windowWidth > 992 
        || windowWidth < 992 && windowWidth > 720) {
    valueOfSwiper2 = 1.55;
    valueOfSwiper3 = 1.32;
}else if(windowWidth < 720 && windowWidth > 540) {
    valueOfSwiper2 = 1.15;
    valueOfSwiper3 = 0.96;
}else if(windowWidth > 320 && windowWidth < 540) {
    valueOfSwiper2 = 1;
    valueOfSwiper3 = 0.575;
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

window.addEventListener('resize', () => {
    if(windowWidth > 992) {
        navbar.classList.remove('navbar-active')
        navbarBrands.classList.remove('active')
        burger.classList.remove('open')
        menuOpen = false;
    }
})