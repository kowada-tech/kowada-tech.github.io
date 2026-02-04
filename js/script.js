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

  //Клик на Категорию
  $('.catalog_category_wrap').click(function() {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).parent().find('.catalog_subcategories').toggle();
    } else {
      if ( $(this).parents('.catalog_categories').find('.catalog_category_wrap').hasClass('open')) {
        $(this).parents('.catalog_categories').find('.catalog_category_wrap.open').removeClass('open').parent().find('.catalog_subcategories').toggle();
      }
      $(this).addClass('open');
      $(this).parent().find('.catalog_subcategories').toggle();
    }
  });

 $('.catalog_subcategory_wrap').click(function() {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).parent().find('.catalog_subcategory_item').toggle();
    } else {
      if ( $(this).parents('.catalog_subcategories').find('.catalog_subcategory_wrap').hasClass('open')) {
        $(this).parents('.catalog_subcategories').find('.catalog_subcategory_wrap.open').removeClass('open').parent().find('.catalog_subcategory_item').toggle();
      }
      $(this).addClass('open');
      $(this).parent().find('.catalog_subcategory_item').toggle();
    }
  });

  $('.catalog_subcategory_item_wrap').click(function() {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).parent().find('.catalog_subcategory_item_list').toggle();
    } else {
      if ( $(this).parents('.catalog_subcategory_item').find('.catalog_subcategory_item_wrap').hasClass('open')) {
        $(this).parents('.catalog_subcategory_item').find('.catalog_subcategory_item_wrap.open').removeClass('open').parent().find('.catalog_subcategory_item_list').toggle();
      }
      $(this).addClass('open');
      $(this).parent().find('.catalog_subcategory_item_list').toggle();
    }
  });

  $('.catalog_filter_title').click(function() {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).parent().find('.catalog_filter_hidden').toggle();
    } else {
      $(this).addClass('open');
      $(this).parent().find('.catalog_filter_hidden').toggle();
    }
  });

  $("#catalog_year_range").slider({
      animate: "slow",
      range: true,
      min: 1700,
      max: 1917,
      values: [1700, 1917],
      slide : function(event, ui) {
        $( "#year_min" ).val(ui.values[0]);
        $( "#year_max" ).val(ui.values[1]);
      }
  });
  
  $( "#year_min" ).val($("#catalog_year_range").slider("values", 0));
  $( "#year_max" ).val($("#catalog_year_range").slider("values", 1));

   $("#catalog_price_range").slider({
      animate: "slow",
      range: true,
      min: 20,
      max: 2500000,
      values: [20, 2500000],
      slide : function(event, ui) {
        $( "#price_min" ).val(ui.values[0]);
        $( "#price_max" ).val(ui.values[1]);
      }
  });
  
  $( "#price_min" ).val($("#catalog_price_range").slider("values", 0));
  $( "#price_max" ).val($("#catalog_price_range").slider("values", 1));

  $('.checkbox').click(function() {
    $(this).toggleClass('active');
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

