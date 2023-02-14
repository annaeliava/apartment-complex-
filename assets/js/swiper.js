var swiper = new Swiper(".mySwiper", {
  speed: 400,
  loop: true,
  spaceBetween: 36,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".secondSwiper", {
  speed:400,
  spaceBetween: 29,
  direction: 'vertical',
  slidesPerView: 2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});