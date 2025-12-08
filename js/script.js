$(document).ready(function() {
  $('.carousel_inner').slick({
    dots: true,
    dotsClass: 'slick-dots',
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-prev"></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="icon-next"></span></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.langMenu').click(function(){
    if ($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).parent().find(".langMenu_list").hide();
    } else {
       $(this).toggleClass('active');
       $(this).parent().find(".langMenu_list").show();
     }
  });

  $('.langMenu_item').click(function(){
    if ($(this).hasClass('russian')){
      if ($(this).parents().find('.russian_pic').hasClass('active')) {
        $(this).parents().find('.langMenu_picture').toggleClass('active');
        $(this).parents().find('.langMenu_list').toggleClass('active');
      } else {
        $(this).parents().find('.russian_pic').addClass('active');
        $(this).parents().find('.english_pic').removeClass('active');
        $(this).parents().find('.langMenu_picture').toggleClass('active');
      }
      
    }
    if ($(this).hasClass('english')){
      if ($(this).parents().find('.english_pic').hasClass('active')) {
        $(this).parents().find('.langMenu_picture').toggleClass('active');
      } else {
        $(this).parents().find('.english_pic').addClass('active');
        $(this).parents().find('.russian_pic').removeClass('active');
        $(this).parents().find('.langMenu_picture').toggleClass('active');
      }
    }
    
  });

  //Клик на бургер изменяет вид бургера, затеняет фон и открывает меню
  $('.hamburger').click(function(){
    if ($('.hamburger').hasClass('active')){
      $('body').removeClass('fixed');
      $('.hamburger').removeClass('active');
      $('.menu_wrap').removeClass('active');
    } else {
      $('body').addClass('fixed');
      $('.hamburger').addClass('active');
      $('.menu_wrap').toggleClass('active');
    }
  });  

  //Клик на пункт меню раскрывает подкупнкты
  $('.menu_item').click(function() {
    if ($(this).parents().find('.hamburger').is('.active')) {
      if ($(this).is('.open')) {
        $(this).removeClass('open');
      } else {
        $(this).addClass('open');
      }
    }
  });

  $('.danger_scale').each(function() {
    let scale = +$(this).attr('data-scale'),
        item = $(this);

    if (scale === 1) {
      colorCircle(item, scale, 'green')
    }
    if (scale === 2) {
      colorCircle(item, scale, 'yellow')
    }
    if (scale === 3) {
      colorCircle(item, scale, 'orange')
    } 
    if (scale > 3) {
      colorCircle(item, scale, 'red')
    }

    function colorCircle (item, scale, classColor) {
      let i = 0;
      while (i < scale) {
        item.children().eq(i).addClass(classColor + ' symbol');
        i++;
      }
    }
  });

  //Фиксирование при прокрутке меню
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
      $('.header').addClass('media');
      $('.carousel').addClass('media');
      $('.searchForms').addClass('media');
    }
    if ($(window).scrollTop() < 1) {
      $('.header').removeClass('media');
      $('.carousel').removeClass('media');
      $('.searchForms').removeClass('media');
    }
  });
 


  $('.input-file input[type=file]').on('change', function(){
    let file = this.files[0];
    $(this).next().html(file.name);
  });

  $('.counter_minus').click(function() {
    let $input = $(this).parent().find('.counter_value');
    let count = parseInt($input.text()) - 1;
    console.log(count);
    count = count < 1 ? 1 : count;
    $input.text(count);
  });

  $('.counter_plus').click(function() {
    let $input = $(this).parent().find('.counter_value');
    let count = parseInt($input.text()) + 1;
    let maxcount = parseInt($(this).parent().parent().parent().find('.max-count').text());
    count = count > maxcount ? maxcount : count;
    $input.text(count);
  }); 

  $('.product_label').click(function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).parent().find('.product_list').hide();
    } else {
      $(this).toggleClass('active');
      $(this).parent().find('.product_list').show();
    }
    
  });

  $('.product_list > li').click(function() {
    let count = $(this).text();
    $(this).parents('.product_select').find('.product_label').text(count);
    $(this).parents('.product_select').find('.product_label').removeClass('active');
    $(this).parent().hide();
  });

  //Статистика по слабам монет, страница с буквами
  //Функция, которая задает положение блока стран при раскрытии блока с буквой
  function addMarginPeriod () {
    $('.statistic_letter_wrap').each(function() {
      let marginParent = $(this).parents('.statistic_wrap')[0].getBoundingClientRect().left;
      let marginItems = $(this).parent('.statistic_item')[0].getBoundingClientRect().left;
      let marginPeriods = marginParent - marginItems;
      let widthPeriods = $(this).parents('.statistic_wrap').outerWidth();
      $(this).css({'margin-left': marginPeriods, 'width': widthPeriods})
    })
  };

  addMarginPeriod ();

  //Статистика по слабам монет, страница с буквами
  //При изменении замера окна изменится положение блока стран при раскрытии блока с буквой
  $(window).resize(function() {
    addMarginPeriod ();
  });

  //Статистика по слабам монет, страница с буквами
  //Клик на блок с буквой
  $('.statistic_letter').click(function() {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).parent().find('.statistic_letter_wrap').toggle();
    } else {
      if ( $(this).parents('.statistic_wrap').find('.statistic_letter').hasClass('open')) {
        $(this).parents('.statistic_wrap').find('.statistic_letter.open').removeClass('open').parent().find('.statistic_letter_wrap').toggle();
      }
      $(this).addClass('open');
      $(this).parent().find('.statistic_letter_wrap').toggle();
    }
  });

  //Статистика по слабам монет, страница с буквами
  //Клик на блок с названием страны (периода)
  $('.statistic_letter_title, .statistic_letter_period > .plus').click(function() {
    if ($(this).parent().hasClass('open')) {
      $(this).parent().removeClass('open').children('.statistic_denomination').toggle();
    } else {
      if ($(this).parents('.statistic_letter_periods').find('.statistic_letter_period').hasClass('open')) {
        $(this).parents('.statistic_letter_periods').find('.statistic_letter_period.open').removeClass('open').find('.statistic_denomination').toggle();
      }
      $(this).parent().addClass('open').find('.statistic_denomination').toggle();
    }
  });

 
});

