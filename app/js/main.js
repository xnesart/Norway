$(function () {
  $(".header-box__slider").slick({
    dots: true,
    arrows: true,
    prevArrow:
      '<button type="button" class="header-box__slider-prev"><img class="header-box__slider-prev-img" src="images/arrow-up.svg" alt="go up"></button>',
    nextArrow:
      '<button type="button" class="header-box__slider-next"><img class="header-box__slider-next-img" src="images/arrow-down.svg" alt="go down"></button>',
    infinite: true,
    // fade: true,
    vertical: true,
  });
  // $(".main-slider").slick({
  //   dots: true,
  //   arrows: true,
  //   infinite: true,
  //   prevArrow: '<button type="button" class="main-slider__slider-prev"><img class="main-slider__slider-prev-img" src="images/main-arrow-up.svg" alt="go up"></button>',
  //   nextArrow: '<button type="button" class="main-slider__slider-next"><img class="main-slider__slider-next-img" src="images/main-arrow-down.svg" alt="go down"></button>',
  //   dotsClass: 'main-slider__dots',
  // });

  $(".main-slider__title").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: ".main-slider__content",
    vertical: true,
    centerMode: true,
    centerPadding: "8px",
    prevArrow:
      '<button type="button" class="main-slider__slider-prev"><img class="main-slider__slider-prev-img" src="images/main-arrow-up.svg" alt="go up"></button>',
    nextArrow:
      '<button type="button" class="main-slider__slider-next"><img class="main-slider__slider-next-img" src="images/main-arrow-down.svg" alt="go down"></button>',
      responsive: [
        {
          breakpoint: 972,
          settings: {
            slidesToShow: 1,
            vertical: false,
            arrows: false,
            centerMode: true,
            dots: true,
          },
        },
      ],
  });
  $(".main-slider__content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".main-slider__title",
    arrows: false,
    vertical: true,

  });
  $(".nav__button").on("click", function () {
    $(".nav").toggleClass("nav--active");
  });
});
