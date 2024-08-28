"use strict";

// //masked inputs
// $(() => {
//   Inputmask({"mask": "+7 (999) 999 - 99 - 99"}).mask('.phone-mask');
// });
//

//
//
// // mobile menu
// $(() => {
//   const btnMenu = document.querySelectorAll('.js-open-mobile-menu');
//   const menu = document.querySelector('.js-mobile-menu');
//   const body = document.querySelector('body');
//   btnMenu.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//       e.stopPropagation();
//       menu.classList.add('is-open');
//       body.classList.add('opened-menu')
//     });
//   })
//   const closeBtn = document.querySelector('.js-close-mobile-menu');
//   closeBtn.addEventListener('click', function (e) {
//     e.stopPropagation();
//     menu.classList.remove('is-open');
//     body.classList.remove('opened-menu')
//   });
// });
//
//

$(function () {
  $('.js-hover-help').hover(function () {
    $('.js-hover-help').removeClass('is-active');
    $(this).addClass('is-active');
  });
});

//sliders
$(function () {
  var caseSlider = new Swiper(".js-case-slider", {
    speed: 900,
    navigation: {
      nextEl: ".js-case-slider-next",
      prevEl: ".js-case-slider-prev"
    },
    pagination: {
      el: ".js-case-slider-pagination",
      clickable: true
    },
    on: {
      realIndexChange: function realIndexChange() {
        var index = this.realIndex; /* slide 1 => slides[1] */
        var current_data = this.slides[index].dataset.title;
        $(".js-case-title").text(current_data);
        $(".js-case-number").text('0' + (this.realIndex + 1));
      }
    }
  });
  var expertiseSlider = new Swiper(".js-expertise-slider", {
    speed: 900,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".js-expertise-slider-next",
      prevEl: ".js-expertise-slider-prev"
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      960: {
        slidesPerView: 3
      }
    }
  });
});

//toggle menu
$(function () {
  $('.js-open-mobile-menu').on('click', function () {
    $(this).toggleClass('is-active');
    $('.top-nav__wrapper').toggleClass('is-open');
    $('body').toggleClass('is-loading');
  });
});
$('.mobile-help__content').on('shown.bs.collapse', function () {
  $(this).parent().addClass('is-active');
});
$('.mobile-help__content').on('hidden.bs.collapse', function () {
  $(this).parent().removeClass('is-active');
});
$(function () {
  $(".js-button-anchor").click(function (e) {
    e.preventDefault();
    var aid = $(this).attr("data-to");
    $('html,body').animate({
      scrollTop: $(aid).offset().top
    }, 1300);
  });
});