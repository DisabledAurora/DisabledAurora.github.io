/* Creating a new instance of the Swiper class. */
const swiper = new Swiper(".mySwiper", {
  // Optional parameters
  // effect: "fade",
  // direction: "vertical",
  effect: "cards",
  grabCursor: true,
  // loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  direction: "vertical",
  effect: "fade",
  pagination: {
    el: ".swiper-pagination2",
    dynamicBullets: true,
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  // effect: "flip",
  // effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      origin: "left center",
      translate: ["-5%", 0, -200],
      rotate: [0, 90, 0],
    },
    next: {
      origin: "right center",
      translate: ["5%", 0, -200],
      rotate: [0, -90, 0],
    },
  },

  grabCursor: true,
  pagination: {
    el: ".swiper-pagination-3",
  },
  navigation: {
    nextEl: ".swiper-button-next-3",
    prevEl: ".swiper-button-prev-3",
  },
});
