new WOW().init();
const windowWidth = document.body.clientWidth;
const navbar = document.querySelector('.navbar-block__links');
const headerNavbar = document.querySelector('.header-navbar');
const burger = document.querySelector('.navbar-hamb');
const navbarBrands = document.querySelector('.navbar-brands');
const burgerMenu = document.querySelector('.navbar-hamb__burger')
const stagingBodyImg = document.querySelector('.staging-body__img');
const stagingBodyImages = document.querySelectorAll('.staging-body__img');
let valueOfSwiper2 = 4;
let valueOfSwiper3 = 2;
let menuOpen = false;
if(windowWidth > 1200) {
    valueOfSwiper2 = 4
}else if(windowWidth < 1200 && windowWidth > 720) {
    valueOfSwiper2 = 1.55;
    valueOfSwiper3 = 1.32;
}else if(windowWidth < 720 && windowWidth > 540) {
    valueOfSwiper2 = 1.15;
    valueOfSwiper3 = 0.96;
}else if(windowWidth > 320 && windowWidth < 540) {
    valueOfSwiper2 = 1;
    valueOfSwiper3 = 0.575;
}

if(windowWidth < 992) {
    headerNavbar.classList.remove('animate__animated')
    headerNavbar.classList.remove('animate__fadeInDown')
}else{
    headerNavbar.classList.remove('animate__animated')
    headerNavbar.classList.add('animate__fadeInDown')
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

    if(windowWidth < 992) {
        headerNavbar.classList.remove('animate__animated')
        headerNavbar.classList.remove('animate__fadeInDown')
    }else{
        headerNavbar.classList.add('animate__animated')
        headerNavbar.classList.add('animate__fadeInDown')
    }
})