const initSwiperArticles = (swiper) => {
  if (swiper) {
    // eslint-disable-next-line
    new Swiper('#catalogSwiper', {
      navigation: {
        nextEl: '.catalog__button--prev',
        prevEl: '.catalog__button--next',
      },

      mousewheel: true,
      keyboard: true,

      loop: true,

      breakpoints: {
        280: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 2,
        },

        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 22,
          initialSlide: 2,
        },

        768: {
          slidesPerView: 3,
          slidesPerGroup: 2,
          spaceBetween: 30,
          initialSlide: 2,
        },
        1300: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 18,
          initialSlide: 0,
        },

        1500: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 18,
          initialSlide: 0,
        },
      },
    });
  }
};

export { initSwiperArticles };
