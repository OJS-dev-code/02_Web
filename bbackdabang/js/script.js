$(function(){

    //header navigation
    let one_li = $('.nav>ul>li')
    one_li.hover(
        function () {
        // VoiceofCustomer 클래스는 제외
            if (!$(this).hasClass('VoiceofCustomer') && $(this).find('ul').length) {
                // 현재 li의 ul만 보여줌
                // 배경 .sub-bg에 .on 클래스 추가
                $('.sub-bg').addClass('on');
                $(this).find('ul').stop(true, true).slideDown(400);
            }
        },
        function () {
            // VoiceofCustomer 클래스는 제외
            if (!$(this).hasClass('VoiceofCustomer') && $(this).find('ul').length) {
                // 현재 li의 ul만 숨김
                // 배경 .sub-bg에 .on 클래스 제거
                $('.sub-bg').removeClass('on');
                $(this).find('ul').stop(true, true).slideUp(400);
            }
        }
    );

    //main-swiper
    var swiper = new Swiper(".mainSwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });

    //footer familysite
    var familysite_Button = $('.familyBtn');
    var familysite_UL = $('.familysiteUL')
    var family_slide=0;
    familysite_Button.click(function(){
        if(family_slide == 0){
            familysite_UL.slideUp(200);
            family_slide=1;
        }else if(family_slide == 1){
            familysite_UL.slideDown(200);
            family_slide=0;
        }
    })
})