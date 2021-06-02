$(document).ready(function(){
    //project swiper 
    var swiper = new Swiper(".explain", {
        speed: 600,
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
    var Count = 0; 
    var bottlePosition = 0;
    $(".navigation .next").click(function(){
        Count++;
    
        if( bottlePosition < 1800) {
            bottlePosition += 600;
            $(".bottle").animate({left:bottlePosition + "px"},400);
        } else {
            bottlePosition = 1900;
            $(".bottle").animate({left:bottlePosition},600);
        }
    });
    $(".navigation .prev").click(function(){
        Count++;
    
        if( bottlePosition > 100) {
            bottlePosition -= 600;
            $(".bottle").animate({left:bottlePosition + "px"},600);
        } else {
            bottlePosition = 0;
            $(".bottle").animate({left:bottlePosition},400);
        }
    });



});
