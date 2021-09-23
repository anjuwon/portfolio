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

  var swiper = new Swiper('.shopping', {
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false
    },
    slidesPerView: 1.3,
    spaceBetween: 40,
    freeMode: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  })

  //shopping swiper
  // var iw = window.innerWidth
  // if (iw < 1281) {
  //   var swiper1 = new Swiper('.shopping', {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   })
  // } else if (iw < 993) {
  //   var swiper2 = new Swiper('.shopping', {
  //     slidesPerView: 2,
  //     spaceBetween: 10
  //   })
  // } else if (iw < 769) {
  //   var swiper3 = new Swiper('.shopping', {
  //     slidesPerView: 1,
  //     spaceBetween: 10
  //   })
  // }

  // // pc에서만
  // else {
  //   var swiper = new Swiper('.shopping', {
  //     scrollbar: {
  //       el: '.swiper-scrollbar',
  //       hide: false
  //     },
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     freeMode: true,
  //     breakpoints: {
  //       992: {
  //         slidesPerView: 2
  //       }
  //     }
  //   })
  // }
})
