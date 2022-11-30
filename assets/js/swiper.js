const swiperImages = new Swiper(".image-slider", {
  // Optional parameters

  loop: true,

  // If we need autoplay
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
//*Products slider
const swiperProducts = new Swiper(".product-slider", {
  // Optional parameters
  loop: true,

  // Default parameters
  slidesPerView: 4,
  spaceBetween: 30,
  // Responsive breakpoints

  breakpoints: {
    // when window width is >= 320px
    220: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    764: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination-products",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
