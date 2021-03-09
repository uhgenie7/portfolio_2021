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
  keyboard: true,
});