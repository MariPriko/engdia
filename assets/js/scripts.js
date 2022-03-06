$(document).ready(function () {
    'use strict';

// Fixed header
    function stickHeader() {
        let pos = $(".header").offset();
        if (pos.top > 50) {
            $(".header").addClass("sticky-header");
        } else {
            $(".header").removeClass("sticky-header");
        }
    }
    stickHeader();
    $(window).on("scroll", function () {
        stickHeader()
    });

// Burger menu
    $('.burger-menu__icon-open').click(function() {
        $(this).siblings(".burger-menu__toggle-menu").addClass("show");
        $(".burger-theme-style").fadeIn(200);
        $("body").addClass("no-scroll");
    });
    $('.burger-close').click(function() {
        $(".burger-menu__toggle-menu").removeClass("show");
        $(".burger-theme-style").fadeOut(200);
        $("body").removeClass("no-scroll");
    });
    $('.burger-link').click(function() {
        $(".burger-menu__toggle-menu").removeClass("show");
        $(".burger-theme-style").fadeOut(200);
        $("body").removeClass("no-scroll");
    });
    $('.burger-theme-style').click(function() {
        $(".burger-menu__toggle-menu").removeClass("show");
        $(this).fadeOut(200);
        $("body").removeClass("no-scroll");
    });

// Smooth links
    $(".smooth").on("click", function (event) {
        var id  = $(this).attr("href"),
            top = $(id).offset().top - 80;
        $("html, body").animate({scrollTop: top}, 600);
    });

// Input effect
    $(".effect-input").val("");
    $(".input-effect .effect-input").focusout(function(){
        if($(this).val() != ""){
            $(this).addClass("has-content");
        }else{
            $(this).removeClass("has-content");
        }
    });
});

// Config sliders
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
        1930: {
            slidesPerView: 4,
            spaceBetween: 60
        },
        1440: {
            slidesPerView: 3.5,
            spaceBetween: 80
        },
        1210: {
            slidesPerView: 3.5,
            spaceBetween: 50
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 15
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
        1930: {
            slidesPerView: 4,
            spaceBetween: 60
        },
        1440: {
            slidesPerView: 4.8,
            spaceBetween: 30
        },
        1210: {
            slidesPerView: 3.8,
            spaceBetween: 50
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 15
        }
    }
});

const swiperStafDocs = new Swiper('.swiper-staffing-docs', {
    // Optional
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".next-slider-style",
        prevEl: ".prev-slider-style",
    },
    // Responsive
    breakpoints: {
        1440: {
            slidesPerView: 5,
            spaceBetween: 10
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        }
    }
});
swiperServices.params.speed = 1000;
swiperStep.params.speed = 1000;
swiperStafDocs.params.speed = 1000;

