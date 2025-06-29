$(function(){
    //header navigation
    let one_li = $('.nav>ul>li')

    one_li.hover(
        function () {
        // VoiceofCustomer 클래스는 제외
            if (!$(this).hasClass('VoiceofCustomer') && $(this).find('ul').length) {
                // 현재 li의 ul만 보여줌
                $(this).find('ul').stop(true, true).slideDown(400);
        
                // 배경 .sub-bg에 .on 클래스 추가
                $('.sub-bg').addClass('on');
            }
        },
        function () {
            // VoiceofCustomer 클래스는 제외
            if (!$(this).hasClass('VoiceofCustomer') && $(this).find('ul').length) {
                // 현재 li의 ul만 숨김
                $(this).find('ul').stop(true, true).slideUp(400);

                // 배경 .sub-bg에 .on 클래스 제거
                $('.sub-bg').removeClass('on');
            }
        }
    );

    //main-swiper
    var swiper = new Swiper(".mainSwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });
})