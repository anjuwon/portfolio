//페이지네이션 on
$(document).ready(function () {
    $('.page-wrap strong').click(function () {
      $(this).addClass('on').siblings('strong').removeClass('on')
    })
});
