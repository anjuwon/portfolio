//라이트 박스
$(".lightgallery").lightGallery({
	thembnail: true,
	autoplay: true,
	pause: 3000,
	progressBar: true
}); 

//윈도우 팝업
$(".window").click(function(e){
	e.preventDefault();
	//window.open("파일명","팝업이름","옵션설정");
	//옵션 : left,top, width, height, status, toolbar, lacation, menubar, scroolbars, fullscreen
	window.open("popup.html","popup01","width=800, height=590, left=50, top=50, scroolbars=0, toolbar=0, menubar=0")
});

//레이어 팝업
$(".layer").click(function(e){
	e.preventDefault();
	//$("#layer").css("display","block");
	//$("#layer").show();
	//$("#layer").fadeIn();
	$("#layer").slideDown();
});
$("#layer .close").click(function(e){
	e.preventDefault();
	//$("#layer").css("display","block");
	//$("#layer").show();
	//$("#layer").fadeOut();
	$("#layer").slideUp();
});


//탭메뉴
var $tab_list =  $(".tab_menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e){
	e.preventDefault();
	var $this = $(this);
	$this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

//배너
// html 마크업을 셋팅 -> css, j쿼리 연동 -> 제이쿼리 호출(슬릭)
$(".ban").slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  autoplay:true,
	  autoplaySpeed:3000,
	  dots:true
});

//갤러리
$(".gallery_img").slick({
	arrows: false,
	fade: true,
	autoplay: true,
	autoplaySpeed: 3000,
	speed: 300,
	slideToShow:1,
	pauseOnHover: true,
	infinite: true
});

$(".play").click(function(){
	$(".gallery_img").slick("slickPlay")
});

$(".pause").click(function(){
	$(".gallery_img").slick("slickPause")
});

$(".prev").click(function(){
	$(".gallery_img").slick("slickPrev")
});

$(".next").click(function(){
	$(".gallery_img").slick("slickNext")
});



//버튼을 클릭하면 전체 메뉴를 보이게 하세요.
$(".tit .btn").click(function(e){
	e.preventDefault()
	//$("#cont_nav").css("display","block"); css로 display:block 처리하기
	//("#cont_nav").show(); <show>는 보여주는 메서드. none값을 block으로 보여줌.
	//$("#cont_nav").fadeIn(); 나타나기 메서드. 대소문자 구분함.
	//$("#cont_nav").slideDown(); 애니메이션 적용됨.
		//--- 위 사항은 1회만 적용됨. 반대 효과는 다시 적용해야함.----//
	//$("#cont_nav").toggle(); show와 hide 를 같이 보여줌.
	//$("#cont_nav").fadeToggle();
	$("#cont_nav").slideToggle(200);
	$(this).toggleClass("on");
});