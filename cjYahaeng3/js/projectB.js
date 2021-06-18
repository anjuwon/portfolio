
$(document).ready(function(){
    //aos
    AOS.init();


    // swiper1 (content1)
    var swiper = new Swiper(".swiper1", {
      spaceBetween: 30,
      effect: "fade",
      autoplay: true,
      speed:800,
      loop: true,
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // swiper2 fade (content4)
    var swiper2 = new Swiper(".leftwrap", {
      spaceBetween: 30,
      speed: 700,
      effect: 'fade',
      allowTouchMove: false,
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: ".cont4swiper .swiper-button-next",
        prevEl: ".cont4swiper .swiper-button-prev",
      },
      pagination: {
        el: ".cont4swiper .swiper-pagination",
        clickable: false,
      },
    });


    // swiper3 (content4)
    var swiper3 = new Swiper(".cont4swiper", {
      speed: 700,
      parallax: true,
      allowTouchMove: false,
      pagination: {
        el: ".cont4swiper .swiper-pagination",
        clickable: false,
      },
      navigation: {
        nextEl: ".cont4swiper .swiper-button-next",
        prevEl: ".cont4swiper .swiper-button-prev",
      },
    });

    


  //nav 메뉴
    $(".menu > ul > li").mouseover(function(){
      $(this).find(".sub_menu").css("dispaly", "block");
    });


    //참여문화유산 탭메뉴
    var tabBtn = $(".tab_btn > a")
    var tabCont = $(".tab_Cont > div")
    tabBtn.click(function(e){
        e.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");
        $("#"+$(this).data('id')).addClass("active").siblings().removeClass("active");
    });



});
