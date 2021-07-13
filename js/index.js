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
            bottlePosition += 400;
            $(".waveWrap .illust2").animate({left:bottlePosition + "px"},400);
        } else {
            bottlePosition = 1900;
            $(".waveWrap .illust2").animate({left:bottlePosition},400);
        }
    });
    $(".navigation .prev").click(function(){
        Count++;
    
        if( bottlePosition > 100) {
            bottlePosition -= 400;
            $(".waveWrap .illust2").animate({left:bottlePosition + "px"},600);
        } else {
            bottlePosition = 0;
            $(".waveWrap .illust2").animate({left:bottlePosition},400);
        }
    });

    //bottle 클릭 시 aboutBox 애니메이션
    // $(".bottle_btn .bottle").click(function(){
    //     $("#content3 .inner").addClass("on");
    // });
    // $(".aboutBox .close").click(function(){
    //     $("#content3 .inner").removeClass("on");
    // });

    //nav 클릭시 이동하기
    var nav_btn = $(".menu ul li");
    var cont = $("section");

    nav_btn.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        //alert(index);
        var section = cont.eq(index);
        var offset = section.offset().top;
        $("html,body").animate({ scrollTop:offset },600,"easeInOutExpo");
    });


    
    //스크롤값
    var wscroll = $(window).scrollTop();
    var dscroll = $(document).scrollTop();
    var content2 = $("#content2").scrollTop();
    
    $(document).scroll(function(){
        wtop = $(window).scrollTop();
        dtop = $(document).scrollTop();

        // if(dtop >= 1200){
        //     $("#content2 .inner").addClass("on");
        // }else {
        //     $("#content2 .inner").removeClass("on");
        // }



        console.log(wtop);
        console.log(dtop);
    });


    //section마다 패럴렉스 효과 넣기
    // $(function(){
    //     var $section = $("#content1 ~ section"),
    //         $sectionInfo = [];

    //     $section.each(function(){
    //         var $this = $(this);
    //         $sectionInfo.push($this.offset().top);
    //     });

    //     console.log($sectionInfo);
        
    //     $section.css({position:'fixed'});

    //     $(window).scroll(function(){ //window scroll event
    //         var sct = $(this).scrollTop();

    //         $section.each(function(idx){
    //             var $this = $(this);
    //             var $newTop = $sectionInfo[idx] - sct;
    //             if( sct > $sectionInfo[idx]) {
    //                 $newTop *= 0.5;
    //             }
                
    //             $this.css({top:$newTop});
    //         });
    //     });

    // });



});