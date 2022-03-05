const swiperServices = new Swiper('.swiper-services', {
    // Optional
    direction: 'horizontal',
    slidesPerView: 3.5,
    spaceBetween: 80,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
    },
    // Responsive
    breakpoints: {
        1440: {
            slidesPerView: 3.5,
            spaceBetween: 80
        }
    }
});

const swiperStep = new Swiper('.swiper-step', {
    // Optional
    direction: 'horizontal',
    slidesPerView: 4.8,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination-btns',
        type: 'bullets',
    },
    // Responsive
    breakpoints: {
        1440: {
            slidesPerView: 4.8,
            spaceBetween: 30
        }
    }
});
swiperServices.params.speed = 1000;


$(document).ready(function () {

});