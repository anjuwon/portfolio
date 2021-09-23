$(document).ready(function () {
  //수정하기 버튼 클릭시 인풋박스 나타내기
  $('.reload').click(function () {
    $('.inputBox').addClass('on')
    $('table td em').addClass('on')
  })
  $('.cancle').click(function () {
    $('.inputBox').removeClass('on')
    $('table td em').removeClass('on')
    $('.uploadBox').removeClass('on').siblings('.reloadBox').addClass('on')
  })

  // //회원정보 수정, 등록하기 버튼
  $('.thum .btnGroup .reloadBox').click(function () {
    $(this).removeClass('on').siblings('.uploadBox').addClass('on')
  })

  //페이지네이션
  $('.page_wrap strong').click(function () {
    $(this).addClass('on').siblings('strong').removeClass('on')
  })
})
