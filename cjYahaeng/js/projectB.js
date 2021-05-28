//aos
AOS.init();


// swiper1 (content3)
var swiper1 = new Swiper(".swiper1", {
    spaceBetween: 0,
    centeredSlides: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
});
var swiper2 = new Swiper(".swiper2", {
  spaceBetween: 0,
  centeredSlides: true,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  
});

//swiper3
var swiper3 = new Swiper(".swiper3", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


$(document).ready(function(){
  //nav 메뉴
  $(".menuBtn").click(function(){
    $(".menu").toggleClass("on");
  });


  $()
});
