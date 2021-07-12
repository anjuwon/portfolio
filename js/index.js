$(document).ready(function(){
    
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
            $(".waveWrap .bottle").animate({left:bottlePosition + "px"},400);
        } else {
            bottlePosition = 1900;
            $(".waveWrap .bottle").animate({left:bottlePosition},600);
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

    //bottle 클릭 시 aboutBox 애니메이션
    $(".bottle_btn .bottle").click(function(){
        $("#content4 .inner").addClass("on");
    });
    $(".aboutBox .close").click(function(){
        $("#content4 .inner").removeClass("on");
    });

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

        if(dtop >= 1200){
            $("#content2 .inner").addClass("on");
        }else {
            $("#content2 .inner").removeClass("on");
        }


        

        console.log(wtop);
        console.log(dtop);
    });


    //레이어 팝업
    // $(".IR").click(function(){
    //     $("#IR").show();
    // });
    // $(".sprite").click(function(){
    //     $("#sprite").show();
    // });
    // $(".slick_js").click(function(){
    //     $("#slick_js").show();
    // });
    // //레이어 팝업 close
    // $(".close").click(function(e){
    //     e.preventDefault();
    //     $("#IR").hide();
    //     $("#sprite").hide();
    //     $("#slick_js").hide();
    // });



});