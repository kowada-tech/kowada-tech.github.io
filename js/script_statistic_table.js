$(document).ready(function() {
  //Статистика по слабам монет, страница номинала
  //Функция установления значения по умолчанию в фильтре Grade
  function addSelectedGrade () {
    $('#filters_grade_min').find('option').filter(function() {
      return $(this).css('display') === 'block';
    }).first().prop('selected', true);
    $('#filters_grade_max').find('option').filter(function() {
      return $(this).css('display') === 'block';
    }).last().prop('selected', true);
  }

  addSelectedGrade ();

  //Статистика по слабам монет, страница номинала
  //Функция установления значения по умолчанию в фильтре Year
  function addSelectedYear () {
    $('#filters_years_min').find('option').first().prop('selected', true);
    $('#filters_years_max').find('option').last().prop('selected', true);
  }

  addSelectedYear ();

  //Фиксирование при прокрутке меню, заголовка таблицы разновидностей номинала
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
      $('.header_fixed').addClass('header_fixed_scroll');
      hideTablesHeader ();
    }
    if ($(window).scrollTop() < 1) {
      $('.header_fixed').removeClass('header_fixed_scroll');
      $('.varieties_table_info').removeClass('head_scroll');
        $('.varieties_table_pinned').removeClass('head_scroll');
        $('.varieties_table_block').removeClass('add_bg');
    }
    syncVarietiesColTables ();
    scroolTablesHeader ();
  });

  
  //Статистика по слабам монет, страница с буквами, страница номинала
  //При изменении замера окна изменится 1) положение блока стран при раскрытии блока с буквой; 2) ширина фиксированной шапки таблицы разновидностей
  $(window).resize(function() {
    syncVarietiesStrTables ()
    syncVarietiesColTables ();
    scroolTablesHeader ();
    scroolTable ();
  });

  
  
  //Статистика по слабам монет, страница номинала
  //Синхронизация высоты ячеек таблиц с заголовками и со статистикой
  function syncVarietiesStrTables () {
    $('table.pinned').find('tbody > tr').each(function() {
      let indexTr = $(this).index();
      let heightTr = $(this).height();
      $('table.info').find('tbody > tr').eq(indexTr).height(heightTr);
    });
  };

 syncVarietiesStrTables ();

 //Статистика по слабам монет, страница номинала
  //Синхронизация ширины ячеек таблиц с заголовками и со статистикой
  function syncVarietiesColTables () {
    $('.varieties_table_pinned_visible > th').each(function() {
      let indexCol = $(this).index();
      let widthCol = $(this).width();
      $('.varieties_table_pinned > th').eq(indexCol).width(widthCol);
    });
    $('.varieties_table_info_visible > th').each(function() {
      let indexCol = $(this).index();
      let widthCol = $(this).width();
      $('.varieties_table_info > th').eq(indexCol).width(widthCol);
    });
  };

  syncVarietiesColTables ();

  //Статистика по слабам монет, страница номинала
  //Подсчет общего числа монет в разновидности
  function calcVarietiesTotal () {
    $('table.pinned').find('tbody > tr').each(function() {
      let indexTr = $(this).index();
      
      let total = 0;
      $('table.info').find('tbody > tr').eq(indexTr).children().not('td:hidden').each(function() {
        total += +($(this).text());
      });
      $(this).find('.varieties_table_total').text(total);
    });
  };

  calcVarietiesTotal ();

  //Статистика по слабам монет, страница номинала
  //Фильтр Details
  $('#filters_details_toggle').click(function() {
    if ($(this).is(':checked')){
      console.log('Включен');
    } else {
      console.log('Выключеkн');
    }
  });

  //Статистика по слабам монет, страница номинала
  //Фильтр общей категории сохранности
  $('.filters_safeties_btn').click(function() {
    if ($(this).not('.active')){
      if ($(this).parent().find('.filters_safeties_btn.active')) {
        $(this).parent().find('.filters_safeties_btn.active').removeClass('active');
        $(this).addClass('active');
      } else {
        $(this).addClass('active');
      }
    }
  });

  

  //Статистика по слабам монет, страница номинала
  //Клик на чекбокс Base Grades
  $('#checkbox_symbol_base').click(function() {
    let hasClassThis = $(this).hasClass('active');
    let hasClassSymbol_1 = $('#checkbox_symbol_star').hasClass('active');
    let hasClassSymbol_2 = $('#checkbox_symbol_plus').hasClass('active');
    let alleItemsTd = $(this).parents('.main_page').find('[data-value]');
    let alleItemsGrage = $(this).parents('.main_page').find('[id*="filters_grade_"]').children();
    if (hasClassThis){
      $(this).removeClass('active');

      if (hasClassSymbol_1 || hasClassSymbol_2) {
        alleItemsTd.filter(function(){
          let star = $(this).attr('class').indexOf('★');
          let plus = $(this).attr('class').indexOf('+');
          if (plus < 0) {
            if (star < 0) {
              return $(this);
            }
          }
        }).css({"display" : "none"});
        alleItemsGrage.filter(function(){
          let star = $(this).text().indexOf('★');
          let plus = $(this).text().indexOf('+');
          if (plus < 0) {
            if (star < 0) {
              return $(this);
            }
          }
        }).css({"display" : "none"});
        console.log(1);
      }
      if (!hasClassSymbol_1 & !hasClassSymbol_2) {
        alleItemsTd.css({"display" : "table-cell"});
        alleItemsGrage.css({"display" : "block"});
        console.log(2);
      }
    } else {
      $(this).addClass('active');

      if (hasClassSymbol_1 || hasClassSymbol_2) {
        alleItemsTd.filter(function(){
          let star = $(this).attr('class').indexOf('★');
          let plus = $(this).attr('class').indexOf('+');
          if (plus < 0) {
            if (star < 0) {
              return $(this);
            }
          }
        }).css({"display" : "table-cell"});
        alleItemsGrage.filter(function(){
          let star = $(this).text().indexOf('★');
          let plus = $(this).text().indexOf('+');
          if (plus < 0) {
            if (star < 0) {
              return $(this);
            }
          }
        }).css({"display" : "block"});

      }
      if (!hasClassSymbol_1 & !hasClassSymbol_2) {
        alleItemsTd.filter(function(){
          let star = $(this).attr('class').indexOf('★');
          let plus = $(this).attr('class').indexOf('+');
          if ((star >= 0) || (plus >= 0)) {
            return $(this);
          }
        }).css({"display" : "none"});
        alleItemsGrage.filter(function(){
          let star = $(this).text().indexOf('★');
          let plus = $(this).text().indexOf('+');
          if ((star >= 0) || (plus >= 0)) {
            return $(this);
          }
        }).css({"display" : "none"});
      }
    }

    scroolTable ();
    syncVarietiesStrTables ();
    addSelectedGrade ();
    calcVarietiesTotal ();
  });

  //Статистика по слабам монет, страница номинала
  //Функция, выполняющаяся при клике на чекбокс ★ или +
  function activeCheckboxSymbol (id_this, id_Symbol, symbol_1, symbol_2, symbol_3) {
    let hasClassThis = $(id_this).hasClass('active');
    let hasClassSymbol = $(id_Symbol).hasClass('active');
    let hasClassBase = $('#checkbox_symbol_base').hasClass('active');
    let alleItemsTd = $(id_this).parents('.main_page').find('[data-value]');
    let alleItemsGrage = $(id_this).parents('.main_page').find('[id*="filters_grade_"]').children();
    if (hasClassThis){
      $(id_this).removeClass('active');
      if ((hasClassBase & hasClassSymbol) || (!hasClassBase & hasClassSymbol)) {
        alleItemsTd.filter(function(){
          return $(this).attr('class').indexOf(symbol_1) >= 0
        }).css({"display" : "none"});
        alleItemsGrage.filter(function(){
          return $(this).text().indexOf(symbol_1) >= 0
        }).css({"display" : "none"});
      }
      if (hasClassBase & !hasClassSymbol) {
        alleItemsTd.filter(function(){
          if($(this).attr('class').indexOf(symbol_1) >= 0) {
            return $(this).attr('class').indexOf(symbol_2) < 0;
          }
        }).css({"display" : "none"});
        alleItemsGrage.filter(function(){
          if($(this).text().indexOf(symbol_1) >= 0) {
            return $(this).text().indexOf(symbol_2) < 0;
          }
        }).css({"display" : "none"});
      } 
      if (!hasClassBase & !hasClassSymbol) {
        alleItemsTd.css({"display" : "table-cell"});
        alleItemsGrage.css({"display" : "block"});
      } 
    } else {
      $(id_this).addClass('active');
      if (hasClassBase & !hasClassSymbol) {
        alleItemsTd.filter(function(){
          if($(this).attr('class').indexOf(symbol_1) >= 0) {
            return $(this).attr('class').indexOf(symbol_2) < 0;
          }
        }).css({"display" : "table-cell"});
        alleItemsGrage.filter(function(){
          if($(this).text().indexOf(symbol_1) >= 0) {
            return $(this).text().indexOf(symbol_2) < 0;
          }
        }).css({"display" : "block"});
      }
      if ((hasClassSymbol & !hasClassBase) || (hasClassSymbol & hasClassBase)) {
        alleItemsTd.filter(function(){
            return $(this).attr('class').indexOf(symbol_1) >= 0;
        }).css({"display" : "table-cell"});
        alleItemsGrage.filter(function(){
          return $(this).text().indexOf(symbol_1) >= 0;
        }).css({"display" : "block"});
      }
      if (!hasClassSymbol & !hasClassBase) {
        alleItemsTd.filter(function(){
          return $(this).attr('class').indexOf(symbol_1) < 0;
        }).css({"display" : "none"});
        alleItemsTd.filter(function(){
          return $(this).attr('class').indexOf(symbol_3) >= 0;
        }).css({"display" : "none"});

        alleItemsGrage.filter(function(){
          return $(this).text().indexOf(symbol_1) < 0;
        }).css({"display" : "none"});
        alleItemsGrage.filter(function(){
          return $(this).text().indexOf(symbol_3) >= 0;
        }).css({"display" : "none"});

      }
    }

    scroolTable ();
    syncVarietiesStrTables ();
    addSelectedGrade ();
    calcVarietiesTotal ();
  };

  $('#checkbox_symbol_star').click(function() {
    activeCheckboxSymbol('#checkbox_symbol_star', '#checkbox_symbol_plus', '★', '+', '+★');
  });

  $('#checkbox_symbol_plus').click(function() {
    activeCheckboxSymbol('#checkbox_symbol_plus', '#checkbox_symbol_star', '+', '★', '+★');
  });

  //Статистика по слабам монет, страница номинала
  //Фильтр Grade
  $('#filters_grade_min').change(function() {
    let min = $(this).val();
    let max =  $('#filters_grade_max').val();

    if (max >= min) {
      $(this).parents('.main_page').find('[data-value]').find(function() {
      })

      $(this).parents('.main_page').find('[data-value]').each(function() {
        let valueItem = $(this).attr('data-value');
        if (valueItem < min) {
          $(this).css({"display" : "none"});
        }
        if (min <= valueItem & valueItem <= max) {
          $(this).css({"display" : "table-cell"});
        }
      });
      $(this).children().filter(function() {
        if ($(this).val() >= min) {
          return $(this).val() <= max;
        }
      }).each()
      console.log (a);
      scroolTable ();
      syncVarietiesStrTables ();
      calcVarietiesTotal ();
    }
  });

  $('#filters_grade_max').change(function() {
    let min =  $('#filters_grade_min').val();
    let max = $(this).val();
    if (max >= min) {
      $(this).parents('.main_page').find('[data-value]').each(function() {
        let valueItem = $(this).attr('data-value');
        if (valueItem > max) {
          $(this).css({"display" : "none"});
        }
        if (min <= valueItem & valueItem <= max) {
          $(this).css({"display" : "table-cell"});
        }
      });
      //scroolTable ();
      syncVarietiesStrTables ();
      calcVarietiesTotal ();
    }
  });

  //Статистика по слабам монет, страница номинала
  //Фильтр Year
  $('#filters_years_min').change(function() { 
    let min = $(this).val();
    let max =  $('#filters_years_max').val();
    if (max >= min) {
      $(this).parents('.main_page').find('[data-year]').each(function() {
        let valueItem = $(this).attr('data-year');
        if (valueItem < min) {
          $(this).css({"display" : "none"});
        }
        if (min <= valueItem & valueItem <= max) {
          $(this).css({"display" : "table-row"});
        }
        if (valueItem > max & $(this).css("display") === 'table-row') {
          $(this).css({"display" : "none"});
        }
      });
      let trBlockPinned = $(this).parents('.main_page').find('table.pinned').find('tbody > tr').filter(function () {
        if ($(this).css("display") === 'table-row') {
          return $(this);
        }
      });

      console.log(trBlockPinned);

      trBlockPinned.odd().css({"background-color" : "#e3f1f4"});
      trBlockPinned.even().css({"background-color" : "#fcfcfc"});

      let trBlockInfo = $(this).parents('.main_page').find('table.info').find('tbody > tr').filter(function () {
        if ($(this).css("display") === 'table-row') {
          return $(this);
        }
      });

      trBlockInfo.odd().css({"background-color" : "#eef7f8"}).children().css({'border-left' : '1px solid #eef7f8', 'border-right' : '1px solid #eef7f8'});
      trBlockInfo.even().css({"background-color" : "#fff"}).children().css({'border-left' : '1px solid #fff', 'border-right' : '1px solid #fff'});
    }
    
    syncVarietiesColTables ();
    syncVarietiesStrTables ();
  });
  
  $('#filters_years_max').change(function() {
    let max = $(this).val();
    let min =  $('#filters_years_min').val();
    if (max >= min) {
      $(this).parents('.main_page').find('[data-year]').each(function() {
        let valueItem = $(this).attr('data-year');
        if (valueItem > max) {
          $(this).css({"display" : "none"});
        }
        if (min <= valueItem & valueItem <= max) {
          $(this).css({"display" : "table-row"});
        }
        if (valueItem < min & $(this).css("display") === 'table-row') {
          $(this).css({"display" : "none"});
        }
      });
      let trBlockPinned = $(this).parents('.main_page').find('table.pinned').find('tbody > tr').filter(function () {
        if ($(this).css("display") === 'table-row') {
          return $(this);
        }
      });

      console.log(trBlockPinned);

      trBlockPinned.odd().css({"background-color" : "#e3f1f4"});
      trBlockPinned.even().css({"background-color" : "#fcfcfc"});

      let trBlockInfo = $(this).parents('.main_page').find('table.info').find('tbody > tr').filter(function () {
        if ($(this).css("display") === 'table-row') {
          return $(this);
        }
      });

      trBlockInfo.odd().css({"background-color" : "#eef7f8"}).children().css({'border-left' : '1px solid #eef7f8', 'border-right' : '1px solid #eef7f8'});
      trBlockInfo.even().css({"background-color" : "#fff"}).children().css({'border-left' : '1px solid #fff', 'border-right' : '1px solid #fff'});

    }
    syncVarietiesColTables ();
    syncVarietiesStrTables ();
  });

  //Статистика по слабам монет, страница номинала
  //Клик на кнопку Initial
  $('#filters_btn_initial').click(function() {
    window.location.reload();
  });

  //Статистика по слабам монет, страница номинала
  //Выделение ячеек при наведении на значение в таблице
  $('table.info').find('th, td').hover(function() {
    $(this).css({'background-color': '#227da6', 'color': '#ffffff'});
    let classCol = Number($(this).attr('data-value'));
    $(this).parents('table.info').find('[data-value]').filter(function () {
      return  Number($(this).attr('data-value')) === classCol;
    }).css({'border-left': '1px solid #455A64', 'border-right': '1px solid #455A64'});
  },
    function() {
      let classCol = Number($(this).attr('data-value'));
      $(this).css('background-color', '');
      $(this).css('color', '');
      $(this).parents('table.info').find('[data-value]').filter(function () {
        return  Number($(this).attr('data-value')) === classCol;
      }).each(function() {
        let colorParent = $(this).parent().css('background-color');
        $(this).css({'border-left': colorParent, 'border-right': colorParent});
      });
    }
  );

  //Статистика по слабам монет, страница номинала
  //Прокрутка таблицы
  function scroolTable () {
    let leftParent = $('.varieties_table_scroll').offset().left;
    let topParent = $('.varieties_table_scroll').offset().top;
    let widthParent = $('.varieties_table_scroll').width();
    let heightParent = $('.varieties_table_scroll').height();
    let bottomParent = topParent + heightParent;
    let widthChild = $('.varieties_table_scroll > table.info').width();
    let moreChild = widthChild - widthParent;
    let leftChild = leftParent - moreChild;
    if (widthChild > widthParent) {
      $('.varieties_table_scroll > table.info').draggable({
        disabled: false,
        appendTo: ".varieties_table_scroll",
        containment: [ leftChild, topParent, leftParent, bottomParent ],
        axis: "x",
      });
    } else {
      $('.varieties_table_scroll > table.info').draggable({
        disabled: true
      }).css('left', '');

    }
    
  };
  scroolTable ();

  //Статистика по слабам монет, страница номинала
  //Блок слева, скрывающий часть шапки
  function scroolTablesHeader () {
    let leftParent = $('.varieties_table_scroll').offset().left;
    let widthParent = $('.varieties_table_scroll').width();
    let rightParent = leftParent + widthParent;
    let widthWindow = $(window).width();
    let widthItem = widthWindow - rightParent;
    let heightItem = $('.varieties_table_info').height();
    let heightMenu = $('header.media').outerHeight();
    let heightBlock = $('.header_fixed_scroll').outerHeight();
    let marginTop = heightMenu + heightBlock;
    let leftPinned = $('.varieties_table > .pinned').offset().left;
    $('.varieties_table_block').css({'height' : heightItem, 'top' : marginTop});
    $('.varieties_table_block.right').css({'width' : widthItem});
    $('.varieties_table_block.left').css({'width' : leftPinned});
    $('.head_scroll').css({'top': marginTop});

  };
  
  //Статистика по слабам монет, страница номинала
  //Поведение фиксированной шапки таблицы при прокрутке
  function hideTablesHeader () {
    let topParent = $('table.pinned').offset().top;
    let heightParent = $('table.pinned').outerHeight();
    //нижняя точка, после которой скрывается
    let topHidden = topParent + heightParent;
    

    let topFixed = $('.header_fixed').offset().top;
    let heightFixed = $('.header_fixed').outerHeight();


    //нижняя точка фиксированной области
    let heightHiddenHeader = topFixed + heightFixed;
   

    //высота заголовка
    let heightHeader = $('.varieties_table_info').outerHeight();
    
    let topHiddenHeader = heightHiddenHeader + heightHeader;
     

    let heightMenu = $('.varieties').parents('.main_page').find('.header').outerHeight();
    let heightMargin = $('.varieties_table').css('margin-top');
    heightMargin = parseFloat(heightMargin);
    
    

    //Точка до которой скрывается
    let noneHeader = heightMenu + heightFixed + heightHeader + 5;
    

    if ( topHiddenHeader < topHidden) {
      if ($('.searchForms').hasClass('media') & topHiddenHeader > noneHeader) {
        $('.varieties_table_info').addClass('head_scroll');
        $('.varieties_table_pinned').addClass('head_scroll');
        $('.varieties_table_block').addClass('add_bg');
      }
      if (topHiddenHeader <= noneHeader) {
        $('.varieties_table_info').removeClass('head_scroll');
        $('.varieties_table_pinned').removeClass('head_scroll');
        $('.varieties_table_block').removeClass('add_bg');
     }
    }
    if (topHiddenHeader >= topHidden) {
      $('.varieties_table_info').removeClass('head_scroll');
      $('.varieties_table_pinned').removeClass('head_scroll');
      $('.varieties_table_block').removeClass('add_bg');
    }
  } 
});

