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


$(() => {
  $('.js-hover-help').hover(function () {
    $('.js-hover-help').removeClass('is-active')
    $(this).addClass('is-active')
  })
});


//sliders
$(() => {

  const caseSlider = new Swiper(".js-case-slider", {
    speed: 900,
    navigation: {
      nextEl: ".js-case-slider-next",
      prevEl: ".js-case-slider-prev",
    },
    pagination: {
      el: ".js-case-slider-pagination",
      clickable: true
    },
    on: {
      realIndexChange: function () {
        let index = this.realIndex; /* slide 1 => slides[1] */
        let current_data = this.slides[index].dataset.title;
        $(".js-case-title").text(current_data);
        $(".js-case-number").text('0' + (this.realIndex + 1));
      },
    }
  });
  });
