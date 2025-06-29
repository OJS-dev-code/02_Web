$(function(){
    let submenu = $('.headerBottomNav nav>ul>li');
    let sub = $('.headerBottomNav nav>ul>li>ul');

    submenu.click(function(e){
        e.preventDefault();
        e.stopPropagation(); //다른 li를 클릭하면 현재 열려있는 서브메뉴가 닫히는 현상 방지 
        let sub=$(this).find('ul');
        console.log('ul>li>ul>li click')
        if(sub.is(':visible')){
            sub.slideUp();
        }else{
            sub.slideDown();
        }  
    })

    //1140px 이하일 때 나타나는 햄버거 메뉴
    let line = $('.searchBox .menu>div')
    let nav = $('.headerBottomNav nav');
    $('.searchBox .menu').click(function(e){
        console.log('mobile button click')
        e.preventDefault();
        line.toggleClass('active');
        nav.toggleClass('active');
    });

    //.active 삭제
    $(window).on('resize', function(){
        line.removeClass('active')
        nav.removeClass('active')
        sub.slideUp();
    });


    //section01 swiper slide
    var swiper = new Swiper(".section01_swiper_Frame", {
        pagination: {
          el: ".swiper_pagination1",
          type: "fraction",
        },
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-nextBtn1",
          prevEl: ".swiper-prevBtn1",
        },
    });
    let sp=0;
    $('.section01 .swiper_pauseBtn').click(function(){
        if(sp==0){
            $(this).attr({class:'swiper_playBtn'});
            swiper.autoplay.stop();
            sp =1;
        }else{
            $(this).attr({class:'swiper_pauseBtn'});
            swiper.autoplay.start();
            sp =0;
        }
    });


    //section3 책 슬라이더
    var swiper = new Swiper(".sec3Swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            768: {
                slidesPerView: 2,  //브라우저가 768보다 클 때
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,  //브라우저가 1024보다 클 때
                spaceBetween: 30,
            },
        },
    });

    //section5 tab 슬라이더
    var bullet=['강좌','답사','공모','논문']
    var swiper5 = new Swiper(".tabslide", {
        spaceBetween: 0,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false, 
            //사용자가 슬라이드 조작해도 자동넘김을 계속 유지
        },
        pagination: {
            el:'.tab-pagination',
            clickable:true,
            renderBullet:function(index, className){
                return `<div class=${className}><span>${bullet[index]}</span></div>`
            }
        },
        obserber:true,
        observeParent:true,
    });
    let sp1 = 0; //버튼 누르면 멈추기 
    $('.section05 .swiper_pauseBtn').click(function(){
        if(sp1==0){
            $(this).attr({class:'swiper_playBtn'});
            swiper5.autoplay.stop();
            sp1 =1;
        }else{
            $(this).attr({class:'swiper_pauseBtn'});
            swiper5.autoplay.start();
            sp1 =0;
        }
    });

    //section05 2번째 슬라이드 속 swiper
    var swiper5_2 = new Swiper(".tab-con2", {
      pagination: {
        el: ".swiper_pagination2",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-nextBtn2",
        prevEl: ".swiper-prevBtn2",
      },
    });
    //section05 3번째 슬라이드 속 swiper
    var swiper5_3 = new Swiper(".tab-con3", {
      pagination: {
        el: ".swiper_pagination3",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-nextBtn3",
        prevEl: ".swiper-prevBtn3",
      },
    });


    //section06 팝업존 스와이퍼
    var swiper6 = new Swiper(".popupzonSwiper", {
        pagination: {
            el: ".swiper-pagination4",
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false, 
            //사용자가 슬라이드 조작해도 자동넘김을 계속 유지
        },
    });
    let sp6 = 0; //버튼 누르면 멈추기 
    $('.section06 .swiper_pauseBtn').click(function(){
        if(sp6==0){
            $(this).attr({class:'swiper_playBtn'});
            swiper6.autoplay.stop();
            sp6 =1;
        }else{
            $(this).attr({class:'swiper_pauseBtn'});
            swiper6.autoplay.start();
            sp6 =0;
        }
    });
    
    //section06 모아보기 버튼 누르면 modal창 뜨기
    let modal1 = $('.section06More');
    $('.more').click(function(){
        modal1.fadeIn(250);
    });
    $('.closeBtn').click(function(){
        modal1.fadeOut(250);
    })


    //section07 grid swiper
    var swiper7 = new Swiper(".gridSwiper", {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill:"row"
      },
      slidesPerGroup:2,
      rewind: true,
      spaceBetween: 10,
      /*  loop:true, */
      pagination: {
        el: ".swiper-pagination7",
        clickable: true,
      },
     
      navigation: {
          nextEl: ".swiper-button-next7",
          prevEl: ".swiper-button-prev7",
      },
      breakpoints:{
        960:{
          slidesPerView: 4,
          grid: {
            rows: 2,
            fill:"row"
          },
           slidesPerGroup:4,
        },
        720:{
          slidesPerView: 3,
          grid: {
            rows: 2,
            fill:"row"
          },
           slidesPerGroup:3,
        }
      }
    });

    //footer event
    $('.familysite .btn').click(function(){
      $('.sitebox').toggleClass('on');
      $(this).toggleClass('on');
    })

    //footer 랜덤이미지배너
    const randomNum = Math.floor(Math.random()*4)+1;
    console.log(randomNum);

    const newImgPath= `./img/footer/footer0${randomNum}.png`;
    console.log(newImgPath);
    $('#footerImg').attr('src', newImgPath);

    //top 버튼
    $(window).scroll(function(){
      if($(this).scrollTop()>500){
        $('.scrollTopBtn').fadeIn()
      }else{
        $('.scrollTopBtn').fadeOut()
      }
    })
    $('.scrollTopBtn').click(function(){
      $('html, body').animate({
        scrollTop:0,
      },600);
    })
})