$(document).ready(function(){

  //shopping swiper
  var iw = window.innerWidth;
  if(iw < 1281){
    var swiper = new Swiper('.shopping', {
      slidesPerView: 3,
      spaceBetween: 20,
    })

  }
  else if (iw < 993 ){
    var swiper = new Swiper('.shopping', {
      slidesPerView: 2,
      spaceBetween: 10,
    })
  }
  else if (iw < 769 ){
    var swiper = new Swiper('.shopping', {
      slidesPerView: 1,
      spaceBetween: 10,
    })
  }



  // pc에서만
  else {
    var swiper = new Swiper('.shopping', {
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false
      },
      slidesPerView: 2.8,
      spaceBetween: 30,
      freeMode: true
    })
  }





});
