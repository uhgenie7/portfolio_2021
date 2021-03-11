let swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable : true
  },
  breakpoints: { // 화면의 넓이가 320px 이상일 때 
    320: { slidesPerView: 1},
    // 화면의 넓이가 640px 이상일 때 
    640: { slidesPerView: 2},
    1800: { slidesPerView: 3}
  },
    
  keyboard: true,
});