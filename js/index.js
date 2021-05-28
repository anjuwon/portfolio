//풀페이지
$(function() {
    $('#fullpage').fullpage({
        //options here
        anchors:['section1', 'section2', 'section3', 'section4'],
        navigation: true,
        navigationPosition: 'left',
    });
});

//project swiper 
var swiper = new Swiper(".explain", {
    speed: 600,
    loop: true,
    parallax: true,
    navigation: {
    nextEl: ".navigation .next",
    prevEl: ".navigation .prev",
    },
});
//view swiper
var swiper = new Swiper(".view", {
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".navigation .next",
        prevEl: ".navigation .prev",
    },
});

//스크롤러
var s = skorllr.init();