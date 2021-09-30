$(document).ready(function () {
  //탭버튼 on
  $('.shop-list .button-group button').click(function () {
    $(this).addClass('on').siblings('button').removeClass('on')
  })

  //detail 레이어팝업 열기, 닫기
  $(".box-title").click(function(){
    $(".detail").show();
  });
  $(".close").click(function(){
    $(".detail").hide();
  });
})
