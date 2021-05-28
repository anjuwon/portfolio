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
    allowTouchMove: false,
    loop: true,
    parallax: true,
    navigation: {
        nextEl: ".navigation .next",
        prevEl: ".navigation .prev",
    },
});
//view swiper
var swiper = new Swiper(".view, .mobile", {
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