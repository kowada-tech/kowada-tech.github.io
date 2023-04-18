$(document).ready(function() {
  $('.carousel_inner').slick({
    dots: true,
    dotsClass: 'slick-dots',
    prevArrow: '<button type="button" class="slick-prev"><span class="icon-prev"></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="icon-next"></span></button>',
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

  $('.hidden .langMenu_item').click(function(){
    if ($(this).hasClass('active')) {
      return;
    } else {
      $(this).addClass('active');
      if ($(this).hasClass('russian')) {
        $(this).parents().find('.langMenu_item.english').toggleClass('active');
        return;
      }
      if ($(this).hasClass('english')) {
        $(this).parents().find('.langMenu_item.russian').toggleClass('active');
        return;
      }
    }
    
  });

  $('.hamburger').click(function(){
    if ($('.hamburger').hasClass('active')){
      $('body').removeClass('fixed');
      $('.hamburger').removeClass('active');
      $('.menu').removeClass('active');
      $('.menu_list').removeClass('active');
    } else {
      $('body').addClass('fixed');
      $('.hamburger').toggleClass('active');
      $('.menu').toggleClass('active');
      $('.menu_list').toggleClass('active');
    }
  });  
 
    $('.menu_item').click(function() {
      if ($(this).parents().find('.hamburger').is('.active')) {
        if ($(this).find(".menu_item_list").hasClass('active')){
        $(this).find(".menu_item_title").removeClass('active_tit');
        $(this).removeClass('active');
        $(this).find(".menu_item_list").removeClass('active');
        $(this).find(".menu_item_list").hide();
        return
      }
      if ($(this).find(".menu_item_list").length > 0) {
        $(this).find(".menu_item_title").toggleClass('active_tit');
         $(this).addClass('active');
         $(this).find(".menu_item_list").toggleClass('active');
         $(this).find(".menu_item_list").show();
         return
       }
      } 
      if ($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).find(".menu_item_list").hide();
      } else {
         $(this).toggleClass('active');
         $(this).find(".menu_item_list").show();
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

  $('.menu_item_list').parent().addClass('check');
  $('#more').parent().addClass('check');
  $('.menu_more_list').parent().find('.menu_more_title').addClass('check');

  $('.menu_more').click(function() {
    $(this).toggleClass('active');
  });
  
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

});