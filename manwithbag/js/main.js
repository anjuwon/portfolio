$(document).ready(function () {
  //리사이징
  // var lastWidth = $(window).width()
  // $(window).resize(function () {
  //   if ($(window).width() != lastWidth) {
  //     location.reload()
  //     lastWidth = $(window).width()
  //     return false
  //   }
  // })

  //shopping swiper
  var swiper = new Swiper('.swiper.shopping-slide', {
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false
    },
    slidesPerView: 1,
    spaceBetween: 5,
    freeMode: true,
    breakpoints: {
      400: {
        slidesPerView:1.3
      },
      572: {
          slidesPerView: 2,
        spaceBetween: 10
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    }
  })




  


});
