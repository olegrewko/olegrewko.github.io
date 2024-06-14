$(function () {

  $(".menu a, .totop").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });



  $('.slider-blog__inner').slick({
    arrows: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt="img/arrow-left.svg" /></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt="img/arrow-right.svg" /></button>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    responsive: [{
        breakpoint: 768,
        settings: {

          arrows: false

        }
      },

    ]
  });


  $('.menu__btn, .menu a').on('click', function name() {
    $('.menu__list').toggleClass('menu__list--active');


  });

  
});