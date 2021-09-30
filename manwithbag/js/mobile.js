$(document).ready(function(){
  //모바일 gnb 열기
  var iw = window.innerWidth
  if (iw < 573) {
    $('.gnb').hide()
    $('.m-gnb button').click(function (event) {
      var $target = $(event.target)
      if ($target.is('.on')) {
        $(this).removeClass('on').parent().next('.gnb').slideUp('fast')
      } else {
        $('.gnb').hide()
        $('.m-gnb button').removeClass('on')

        if ($target.is('button')) {
          $(this).addClass('on').parent().next('.gnb').slideDown('fast')
        } else {
          $(this).addClass('on').parent().next('.gnb').slideDown('fast')
        }
      }
      return false
    })
  } else {
  }
});


