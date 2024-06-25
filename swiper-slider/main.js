const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 30,
    // centeredSlides: true,
    initialSlide: 3,
    centeredSlides: true,

    breakpoints: {
        950: {
          slidesPerView: 3,
          spaceBetween: 30
        },
      },
    // watchSlidesProgress: true,
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },

  });