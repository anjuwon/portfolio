$(document).ready(function(){
    //project swiper 
    var swiper = new Swiper(".explain", {
        speed: 600,
        loop: true,
        allowTouchMove: false,
        parallax: true,
        navigation: {
        nextEl: ".navigation .next",
        prevEl: ".navigation .prev",
        },
    });
    //view swiper
    var swiper = new Swiper(".view", {
        speed: 600,
        loop: true,
        allowTouchMove: false,
        pagination: {
        el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".navigation .next",
            prevEl: ".navigation .prev",
        },
    });

    //스크롤러
    var s = skrollr.init();

    //AOS
    AOS.init();

    //content3 버튼 클릭시 애니메이션
    var bottlePosition = 0;
    var click = 0;
    $(".navigation .next").click(function(){
        while (click < 2){
            click++;
            bottlePosition = $(".bottle").animate({left : bottlePosition + "600" + "px"},2000);
        }
    });





});
