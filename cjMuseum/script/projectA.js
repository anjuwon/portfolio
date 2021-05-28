//pc와 모바일    

$(document).ready(function(){


    // 햄버거 메뉴 아이콘 움직이기
        $(".menuBt").click(function(){
            $(".menuBt").toggleClass("on");
        });
    //nav 펼치기
        $(".menuBt").click(function(){
            $(".menu").toggleClass("on");
        });

    //search 아이콘
        $(".searchBtn").click(function(e){
            e.preventDefault();
            $(".searchTxt").toggleClass("on").focus();
        });


    //AOS 
        AOS.init();

    // 현재 전시 swiper 
        var swiper = new Swiper('.swiper1 .swiper-container.ex_wrap', {
            speed: 900,
            // autoplay: true,
            // loop: true,
            parallax: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                autoplay: true,
            },
        });

    //현재 전시 slick
    // $('.slick1.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     asNavFor: '.slick1.slider-nav'
    // });
    // $('.slick1.slider-nav').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     asNavFor: '.slick1.slider-for',
    //     infinite: true,
    //     centerMode: true,
    //     focusOnSelect: true
    // });

    // 분관전시 탭메뉴
    var tabBtn = $(".tabBtn > a")
    var tabCont = $(".tabCont > div")
    tabBtn.click(function(e){
        e.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");
        $("#"+$(this).data('id')).addClass("active").siblings().removeClass("active");
    });

    //분관전시 스크롤시 애니메이션 탭메뉴에 적용하기
        $(document).scroll(function(){
            var scroll = $(window).scrollTop();
            var content2 = $("#content2").scrollTop();
            if( scroll > content2 + 200){
                $(".tabCont > div > div").addClass("on");
            } else {
                $(".tabCont > div > div").removeClass("on");
            }
        });

    //notice 탭메뉴
        var noticeBtn = $(".noticeBtn > a")
        var noticeCont = $(".noticeCont > div")

        noticeCont.hide().eq(0).show();

        noticeBtn.click(function(e){
            e.preventDefault();
            var target = $(this);
            var index = target.index();

            noticeBtn.removeClass("active");
            target.addClass("active");
            noticeCont.css("display","none");
            noticeCont.eq(index).css("display","block");
        });

    //cummunication 탭메뉴
        var communBtn = $(".communBtn > a")
        var communCont = $(".communCont > div")

        communCont.hide().eq(0).show();

        communBtn.click(function(e){
            e.preventDefault();
            var target = $(this);
            var index = target.index();

            communBtn.removeClass("active");
            target.addClass("active");
            communCont.css("display","none");
            communCont.eq(index).css("display","block");
        });


    // 소장품 swiper
        var swiper2 = new Swiper('.swiper-container.swiper2', {
            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            pagination: {
                el: '.swiper-pagination',
            }
        });

    // event 교육행사 swiper
        var swiper3 = new Swiper('.swiper-container.swiper3', {
            slidesPerView: 1,
            spaceBetween: 20,
            // slidesPerView: 4,
            // direction: getDirection(),
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                641: {
                slidesPerView: 4,
                spaceBetween: 20,
                }
            }
        });

    // 교육행사 swiper3 스크롤시 애니메이션 적용하기
        $(document).scroll(function(){
            var scroll2 = $(window).scrollTop();
            var content3 = $("#content3").height();
            if( scroll2 > content3 + 300){
                $(".swiper3 .swiper-slide").addClass("on");
            } else {
                $(".swiper3 .swiper-slide").removeClass("on");
            }
        });

    // UP 메뉴 올리기
        $(window).scroll(function(){
            if($(this).scrollTop() > 500){
                $(".up").addClass("on");
            }else {
                $(".up").removeClass("on");
            }
        });
        $(".up a").click(function(event){
            $(window).scrollTop(0);
            event.preventDefault();
        });
        

    //모바일에서만
    var iw = window.innerWidth;
    if(iw < 641){

        //모바일 subMenu 움직이기
        // $(".menu > ul > li").mouseover(function(){
        // $(this).find(".subMenu").stop().slideDown(300);
        // });
        // $(".menu > ul > li").mouseout(function(){
        // $(this).find(".subMenu").stop().slideUp(300);
        // });

        $(".menu > ul > li").mouseover(function(){
            $(this).find(".subMenu").stop().slideDown(300);
        });
        $(".menu > ul > li").mouseout(function(){
            $(this).find(".subMenu").stop().slideUp(300);
        });
        
         

               
     

    

    // pc에서만
    } else{


        //header 배경
            $(function(){
                $("#header").vegas({
                    slides: [
                        { src: "./img/bg.png", delay: 3500},
                        { src: "./img/bg2.png", delay: 3500},
                        { src: "./img/bg3.png", delay: 3500},
                        { src: "./img/bg4.png", delay: 3500},
                    ]
                });
            });

    


    }
});


//리사이징
var lastWidth = $(window).width();
$(window).resize(function () {
    if ($(window).width() != lastWidth) {
        location.reload();
        lastWidth = $(window).width();
        return false;
    }
});