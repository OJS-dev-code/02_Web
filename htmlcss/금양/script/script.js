$(function(){
  const slides = document.querySelector('.slides');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  const totalSlides = dots.length;
  const slideWidth = 1150;

  function showSlide(index) {
    currentIndex = index;
    slides.style.transform = `translateX(-${slideWidth * index}px)`;
    
    // 모든 dot에서 active 제거 후 선택한 dot에 active 추가
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  // 초기 슬라이드
  showSlide(0);

  // 각 dot에 클릭 이벤트 추가
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });

  // 자동 슬라이드 (선택사항)
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }, 5000);
})