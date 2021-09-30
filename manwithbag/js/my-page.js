$(document).ready(function () {
  // 마이페이지 회원정보수정하기 버튼
    // reload버튼 클릭 시 
    $('.button-group .reload').click(function () {
        $('.button-group .upload').show();
        $('.button-group .cancle').show();
        $('.button-group .reload').hide();

        $('.my-page-info-list table tr em').hide();
        $('.my-page-info-list table tr .input-group').show();
    })
    //cancle버튼 클릭 시
    $('.button-group .cancle').click(function(){
        $('.button-group .reload').show();
        $('.button-group .upload').hide()
        $('.button-group .cancle').hide()

         $('.my-page-info-list table tr em').show()
         $('.my-page-info-list table tr .input-group').hide()
    });




});