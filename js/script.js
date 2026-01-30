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

  function openGalleryImage (imgs) {
  // Получить развернутое изображение
    var expandImg = document.getElementById("expandedImg");
    // Используйте тот же src в развернутом изображении, что и изображение, нажатое на сетке
    expandImg.src = imgs.src;
    // Показать элемент контейнера (скрытый с помощью CSS)
    expandImg.parentElement.style.display = "block";
  }

  $(function(){
    $('#includedContent').load('./header.html'); 
  });

  $('.gallery_img').click(function() {
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');
    const srcImg = $(this).attr('src');
    $('#expandedImg').attr('src', srcImg);

  });

  $('.card_tabs_btn').click(function() {
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');
    const idBlock = '#' + $(this).attr('data-label');
    $(idBlock).parent().find('.active').removeClass('active');
    $(idBlock).addClass('active');
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

