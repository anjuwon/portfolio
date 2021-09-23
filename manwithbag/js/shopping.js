$(document).ready(function () {
  //레이어팝업
  $('.shoppingTitle').click(function (e) {
    e.preventDefault()
    $('.detail').css('display', 'block')
  })
  $('.close').click(function (e) {
    e.preventDefault()
    $('.detail').hide()
  })

  //페이지네이션
  $('.page_wrap strong').click(function () {
    $(this).addClass('on').siblings('strong').removeClass('on')
  })
})
