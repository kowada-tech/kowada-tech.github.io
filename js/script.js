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
      /* else {
        if ($(this).hasClass('active')){
          $(this).removeClass('active');
          return
        } else {
           $(this).toggleClass('active');
           return
         }
         let a = $(this);
         let b = $(this).children(".menu_item menu_item_end");
         console.log(a);
         console.log(b);
         if ($(this).children("#more").length > 0) {
          let a = $(this);
          console.log(a);
          if ($(this).children("#more").hasClass('active')){
            console.log(2);
            $(this).children("#more").removeClass('active');
            return
          } else {
            console.log(3);
             $(this).children("#more").addClass('active');
             return
           }
         } else {
          console.log(1);
         }
         if ($(this).children("#more").hasClass('active')){
          $(this).removeClass('active');
          $(this).find(".menu_item_list").removeClass('active');
          $(this).find(".menu_item_list").hide();
          return
        } if ($(this).children("#more").hasClass('active') === false) {
           $(this).addClass('active');
           $(this).find(".menu_item_list").toggleClass('active');
           $(this).find(".menu_item_list").show();
           return
         }
         return
      } */
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
 
  /* $(window).resize(function() {
    console.log($(window).height());
    if ($(window).height() < 626) {
      $('.menu').css('height', '625px');
      $('.fixed').css('overflow-y', 'scroll');
    }
  });
  $(window).resize();
  if ($(window).height() < 626) {
    $('.menu').css('height', '625px');
    $('.fixed').css('overflow-y', 'scroll');
  } */
});