$(document).ready(function() {
  $('.carousel_inner').slick({
    dots: true,
    dotsClass: 'slick-dots',
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-prev"></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="icon-next"></span></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.langMenu_picture').click(function(){
    $(this).toggleClass('active');
    //$('.langMenu_list').toggleClass('active');

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
        //$(this).parents().find('.langMenu_list').toggleClass('active');
      }
      
    }
    if ($(this).hasClass('english')){
      if ($(this).parents().find('.english_pic').hasClass('active')) {
        $(this).parents().find('.langMenu_picture').toggleClass('active');
        //$(this).parents().find('.langMenu_list').toggleClass('active');
      } else {
        $(this).parents().find('.english_pic').addClass('active');
        $(this).parents().find('.russian_pic').removeClass('active');
        $(this).parents().find('.langMenu_picture').toggleClass('active');
        //$(this).parents().find('.langMenu_list').toggleClass('active');
      }
    }
    
  });

  $('.hamburger').click(function(){
    if ($('.hamburger').hasClass('active')){
      $('.hamburger').removeClass('active');
      $('.hamburger__title_none').hide();
      $('.hamburger__title').show();
      $('.menu').removeClass('active');
      
    } else {
      $('.hamburger').toggleClass('active');
      $('.hamburger__title').hide();
      $('.hamburger__title_none').show();
      $('.menu').toggleClass('active');
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

  /* let counter = 0;
  let previousWindow;

  checkMenuWidthWhenLoad ($(window).width(), counter);

   $(window).resize(function() {
    
    let widthWindow = $(window).width();

    if (previousWindow > widthWindow) {
     counter = checkMenuWidthWhenResize(widthWindow, counter);
    }
    
    previousWindow = widthWindow;
  });

  function checkMenuWidthWhenLoad (widthWindow, counter) {
    if (widthWindow < 1600) {
      counter = hideMenuItem (1600);
    }

    if (widthWindow < 1400) {
      counter = hideMenuItem (1400);
    }

    if (widthWindow < 1200) {
      counter = hideMenuItem (1200);
    }
  }

  function checkMenuWidthWhenResize (widthWindow, counter) {
    if (1400 <= widthWindow && widthWindow < 1600 && counter !== 1600) {
      counter = hideMenuItem (1600);
    }

    if (1200 <= widthWindow && widthWindow < 1400 && counter !== 1400) {
      counter = hideMenuItem (1400);
    }

    if (1000 <= widthWindow && widthWindow < 1200 && counter !== 1200) {
      counter = hideMenuItem (1200);
    }
    return counter;
  }

  function hideMenuItem (counter) {
    $('.menu_item_more').show();
    let menuList = $('.menu_list').children().length;
    let menuItem = $('.menu_list').children().eq(menuList - 2);
    let a = menuItem.removeClass().addClass('menu_more');
    let b = a.find('.menu_item_title').removeClass().addClass('menu_more_title');
    let c = a.find('.menu_item_list').removeClass().addClass('menu_more_list');
    $('#more').append(menuItem);
    return counter;
  }
    
  function shoMenuItem (counter) {
    let moreList = $('#more').children().length;
    let moreItem = $('#more').children().eq(moreList - 1);
    let a = moreItem.removeClass().addClass('menu_item');
    let b = a.find('.menu_more_title').removeClass().addClass('menu_item_title');
    let c = a.find('.menu_more_list').removeClass().addClass('menu_item_list');
    $('.menu_list').append(moreItem);
    return counter;
  } */

  $('.menu_item_list').parent().addClass('check');
  $('.menu_more_list').parent().find('.menu_more_title').addClass('check');

  $('.menu_more').click(function() {
    $(this).toggleClass('active');
  });
  
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 72) {
      $('.navigation').addClass('media');
      $('.icon-logo').addClass('media');
      $('.navigation .logo_title').addClass('media');
      $('.langMenu_picture').addClass('media');
    }
    if ($(window).scrollTop() < 72) {
      $('.navigation').removeClass('media');
      $('.icon-logo').removeClass('media');
      $('.navigation .logo_title').removeClass('media');
      $('.langMenu_picture').removeClass('media');
    }
  });
});