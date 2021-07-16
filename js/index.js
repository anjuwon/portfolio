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
    $(".bottle_btn .bottle").click(function(){
        $("#content3 .inner").addClass("on");
    });
    $(".aboutBox .close").click(function(){
        $("#content3 .inner").removeClass("on");
    });

    //nav 메뉴 클릭시
    var nav_btn = $(".menu ul li");
    var cont = $("section");
        
        //이동 애니메이션
        nav_btn.click(function(e){
            e.preventDefault();
            var target = $(this);
            var index = target.index();
            //alert(index);
            var section = cont.eq(index);
            var offset = section.offset().top;
            
            if( index <= 0 ){
                $("html,body").animate({ scrollTop:offset},600,"easeInOutExpo");
            } else {
                $("html,body").animate({ scrollTop:offset + 100 + "px" },600,"easeInOutExpo");
            }
        });

        //scroll값에 따라 nav 메뉴에 별 들어오기
        $(window).scroll(function(){
            var wScroll = $(this).scrollTop();

            for( n=0; n < cont.length; n++){
                if(wScroll >= cont.eq(n).offset().top){
                    nav_btn.removeClass("active");
                    nav_btn.eq(n).addClass("active");
                }
            }

        });

    
        // contact message 버튼 클릭시
    $(".message .letter").click(function(){
        $(".message").addClass("on");
        $(".contact").show();
        $(".letter").hide();
        $(".message .close").css("display","block");
    });

    $(".message .close").click(function(){
        $(".message").removeClass("on");
        $(".contact").hide();
        $(".letter").show();
        $(".message .close").css("display","none");
    });
    


    
    //스크롤값 알기
    // var wscroll = $(window).scrollTop();
    // var dscroll = $(document).scrollTop();

    // $(window).scroll(function(){
    //     wtop = $(window).scrollTop();
    //     dtop = $(document).scrollTop();

    //     if(dtop >= 1200){
    //         $("#content2 .inner").addClass("on");
    //     }else {
    //         $("#content2 .inner").removeClass("on");
    //     }

    //     console.log(wtop);
    //     console.log(dtop);
    // });


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