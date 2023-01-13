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
    $('.langMenu_list').toggleClass('active');

  });

  $('.langMenu_icon').click(function(){
    if ($(this).hasClass('russian')){
      if ($(this).parents().find('.russian_pic').hasClass('active')) {
        $(this).parents().find('.langMenu_picture').toggleClass('active');
        $(this).parents().find('.langMenu_list').toggleClass('active');
      } else {
        $(this).parents().find('.russian_pic').addClass('active');
        $(this).parents().find('.english_pic').removeClass('active');
        $(this).parents().find('.langMenu_picture').toggleClass('active');
        $(this).parents().find('.langMenu_list').toggleClass('active');
      }
      
    }
    if ($(this).hasClass('english')){
      if ($(this).parents().find('.english_pic').hasClass('active')) {
        $(this).parents().find('.langMenu_picture').toggleClass('active');
        $(this).parents().find('.langMenu_list').toggleClass('active');
      } else {
        $(this).parents().find('.english_pic').addClass('active');
        $(this).parents().find('.russian_pic').removeClass('active');
        $(this).parents().find('.langMenu_picture').toggleClass('active');
        $(this).parents().find('.langMenu_list').toggleClass('active');
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

let widthWindow = $(window).width();
    let menuList = $('.menu_list').children().length;
    let menuItem = $('.menu_list').children().eq(menuList - 3);

    console.log(menuItem);
    
    /* if (widthWindow > 1600) {
      console.log(1);
    } else {
      $('.menu_item_more').show();
      $('.menu_list')
    } */


  /* $('#more').append(menuItem);
  menuItem.children().removeClass(); */
  
  $('.menu_more').click(function() {
    $(this).toggleClass('active');
  });

});