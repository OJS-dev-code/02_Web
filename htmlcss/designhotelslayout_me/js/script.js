//header 
$(window).on('scroll', function(){
  if($(this).scrollTop()>100){
    $('header').addClass('scrolled')
  }else{
    $('header').removeClass('scrolled')
  }
})

$(function () {
    let currentIndex = 0; //현재 보이는 값 지정하기 위한 변수
    // li의 개수
    const maxIndex = $('.section1-left .item-contents li').length;

    // 전환 함수
    function showSlide(index) {
      // 왼쪽 커다란 이미지 페이드(이미지+글자) 전환
      $('.section1-left .item-contents li').fadeOut(500);
      $('.section1-left .item-contents li').eq(index).fadeIn(500);

      // 오른쪽 중간 이미지 전환
      $('.section1-right-imgBox > div').hide();
      $('.section1-right-imgBox > div').eq(index).show();

      // 오른쪽 텍스트 전환
      $('.textWrap > p').hide();
      $('.textWrap > p').eq(index).show();

      // 탭 활성화
      $('.section1-right-tabBox ul li').removeClass('active');
      $('.section1-right-tabBox ul li').eq(index).addClass('active');

      currentIndex = index;
    }

    // 자동 슬라이드
    let slideTimer = setInterval(function () {
      // 처음 동작 시 0+1 % 3 = 1
      // 2번째 동작 시 1+1 % 3 = 2
      let nextIndex = (currentIndex + 1) % maxIndex;
      // 3초 후에 nextIndex 값에 해당하는 slide 보이기 
      showSlide(nextIndex);
    }, 3000);

    // 탭 클릭 시 수동 전환
    $('.section1-right-tabBox ul li').on('click', function (e) {
      // a tag의 링크이동 막기 preventDefault()
      e.preventDefault();
      // 누른 li가 몇 번째 index인지
      let index = $(this).index(); 
      showSlide(index);

      // 타이머 초기화 후 다시 시작
      clearInterval(slideTimer);
      slideTimer = setInterval(function () {
        let nextIndex = (currentIndex + 1) % maxIndex;
        showSlide(nextIndex);
      }, 5000);
    });
  });

  $(function(){
    //section3
    let currentIndex1 = 0;
    let section3Slide = $('.section3-right .item-contents li');
    const maxIndex1 = section3Slide.length;

    // 전환 함수
    function showSlide1(index) {
      // 오른쪽 커다란 미디어 전환
      section3Slide.fadeOut(500);
      section3Slide.eq(index).fadeIn(500);

      // 왼쪽 이미지 페이드(이미지+텍스트) 전환
      $('.section3-left .contentBox > div').hide();
      $('.section3-left .contentBox > div').eq(index).show();

      // 탭 활성화
      $('.tab ul li').removeClass('active');
      $('.tab ul li').eq(index).addClass('active');

      currentIndex1 = index;
    }

    // 자동 슬라이드
    let slideTimer1 = setInterval(function () {
      // 처음 동작 시 0+1 % 3 = 1
      // 2번째 동작 시 1+1 % 3 = 2
      let nextIndex = (currentIndex1 + 1) % maxIndex1;
      // 3초 후에 nextIndex 값에 해당하는 slide 보이기 
      showSlide1(nextIndex);
    }, 3000);

    // 탭 클릭 시 수동 전환
    $('.tab ul li').on('click', function (e) {
      // a tag의 링크이동 막기 preventDefault()
      e.preventDefault();
      // 누른 li가 몇 번째 index인지
      let index = $(this).index(); 
      showSlide1(index);

      // 타이머 초기화 후 다시 시작
      clearInterval(slideTimer1);
      slideTimer1 = setInterval(function () {
        let nextIndex = (currentIndex1 + 1) % maxIndex1;
        showSlide1(nextIndex);
      }, 5000);
    });
  });

  $(function(){
    //section4
    let currentIndex2 = 0; //현재 보이는 값 지정하기 위한 변수
    // li의 개수
    const maxIndex2 = $('.section4-imgBox>.section4-img').length;

    // 전환 함수
    function showSlide2(index) {
      // 왼쪽 커다란 이미지 페이드(이미지+글자) 전환
      $('.section4-imgBox>.section4-img').fadeOut(500);
      $('.section4-imgBox>.section4-img').eq(index).fadeIn(500);

      // 탭 활성화
      $('.section4-txtBox>div span').removeClass('active');
      $('.section4-txtBox>div span').eq(index).addClass('active');

      currentIndex2 = index;
    }

    // 탭 클릭 시 수동 전환
    $('.section4-txtBox>div').on('click', function (e) {
      // a tag의 링크이동 막기 preventDefault()
      e.preventDefault();
      // 누른 li가 몇 번째 index인지
      let index = $(this).index(); 
      showSlide2(index);
    });
  });

  $(function(){
    //footer
    $('.currency').on('click',function(e){
      e.preventDefault();
      $(this).next('.hide').toggle();
    },)
    $('.hide>ul>li').on('click',function(e){
      e.preventDefault();

    })
  });