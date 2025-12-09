$(document).ready(function() {
  $('.carousel_inner').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    easing: 'ease-in-out',
    autoplay: true,
    swipeToSlide: true
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
 
});

