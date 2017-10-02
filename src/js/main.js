function stickyHeader() {
  var header = $('.page-header'),
      scroll = $(window).scrollTop();

  if (scroll > 1) {
    header.addClass('sticky')

  } else {
    header.removeClass('sticky')
  }
}

function loginButtonsMobile() {
  if ($(window).outerWidth() > 767) {
    $('.sign-up-button').show();
  } else if ($('.page-header').hasClass('menu-open') && $(window).outerWidth() < 767) {
    $('.sign-up-button').show();
  } else {
    $('.sign-up-button').hide();
  }
}

function sliderItemHeight() {
  var item = $('.main-slider .item');
  if (item.length && $(window).outerWidth() > 1199 && $(window).outerHeight() > 750) {
    item.css('height', $(window).outerHeight());
  } else {
    item.css('height', '');
    item.addClass('height-auto');
  }
}

$(document).ready(function () {

  sliderItemHeight();

  function tabSection() {

    $('.tabs-nav li').on('click', function () {
      var $this = $(this),
          $tab = $(this).data('tab');
      $('.tabs-selectbox option').each(function () {
        var $itemSelectbox = $(this).data('tab');
        if ($itemSelectbox == $tab) {
          $('.tabs-selectbox option').removeAttr('selected');
          $(this).attr('selected', 'true');
          select2Tabs();
        }
      });
      $('.tabs-content .tab-item').each(function () {
        var $itemData = $(this).data('tab');
        if ($itemData == $tab) {
          $('.tabs-content .tab-item, .tabs-nav li').removeClass('current');
          $(this).addClass('current');
          $this.addClass('current');
        }
      })
    });
    $('.tabs-selectbox').on('change', function () {
      var selectedOption = $('.tabs-selectbox').find(":selected").data('tab');
      $('.tabs-nav li').each(function () {
        var $itemNav = $(this).data('tab');
        if ($itemNav == selectedOption) {
          $('.tabs-nav li').removeClass('current');
          $(this).addClass('current');
        }
      });

      $('.tabs-content .tab-item').each(function () {
        var $itemData = $(this).data('tab');
        if ($itemData == selectedOption) {
          $('.tabs-content .tab-item').removeClass('current');
          $(this).addClass('current');
        }
      })
    });
  }

  tabSection();

  function select2Tabs() {
    if ($('.tabs-selectbox').length) {
      $('.tabs-selectbox').select2({
        minimumResultsForSearch: -1
      });
    }
  }

  select2Tabs();

  /*Мобильная кнопка и меню*/

  (function mobileBtn() {
    var mobileBtn = $('.c-hamburger'),
        mobileMenu = $('.mobile-menu');

    mobileBtn.on('click', function () {
      if ($(window).outerWidth() < 768) {
        $('.sign-up-button').toggle();
      }
      $('.mobile-menu').css('max-height', $(window).outerHeight() - $('.main-header').outerHeight());
      $(this).parents('.page-header').toggleClass('menu-open');
      mobileBtn.toggleClass('is-active');
      mobileMenu.slideToggle();
      $('body').toggleClass('nonScroll overlay');
    });
  }());

  loginButtonsMobile();

  /*Mobile menu*/
  $('#mobile-menu > ul > li > a').on('click', function (e) {
    e.preventDefault();
    var $li = $(this).closest('li');
    $('.banners .banner-block').each(function () {
      if ($(this).data('banner') == $li.data('banner')) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
    $li.find('ul').stop(true, false, true).slideToggle('', function () {
      $li.toggleClass('current')
    }).end().siblings().find('ul').stop(true, false, true).slideUp('', function () {
      $li.siblings().removeClass('current');
    }).end();
  });

  if ($('.main-slider').length) {
    $('.main-slider').not('.slick-initialized').slick({
      speed: 500,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      dots: true,
      dotsClass: 'dots-yellow',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            adaptiveHeight: true
          }
        }
      ]
    });
  }
  if ($('.testimonials-slider').length) {
    $('.testimonials-slider').not('.slick-initialized').slick({
      autoplay: true,
      speed: 500,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      dotsClass: 'dots-yellow dots-yellow_black',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]

    });
  }
  $('.cards-block .card-item').hover(function () {
        var $this = $(this),
            staticItemHeight = $this.find('.item-head').outerHeight(),
            hoverItemHeight = $this.find('.item-hover').outerHeight(),
            total = hoverItemHeight - staticItemHeight;
        if (hoverItemHeight > staticItemHeight) {
          $this.find('.item-content').css({
            "-webkit-transform": "translateY(" + total + "px)",
            "-ms-transform": "translateY(" + total + "px)",
            "transform": "translateY(" + total + "px)"
          });
        }
      },
      function () {
        $(this).find('.item-content').css({
          "-webkit-transform": "translateY(0)",
          "-ms-transform": "translateY(0)",
          "transform": "translateY(0)"
        });
      }
  );

  $('.icons-block .item').matchHeight();

  /*animate elements*/
  if ($(window).outerWidth() >= 1220) {

  /*animate category blocks*/
  $('.anLeft').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInLeftBig',
    offset: 100
  });
  $('.anLeft1').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInLeftBig',
    offset: 150
  });
  $('.anLeft2').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInLeftBig',
    offset: 200
  });
  $('.anRight').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInRightBig',
    offset: 100
  });
  $('.bounceInUp, .card-item-wrapper, .platform-items, .icons-items').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated bounceInUp',
    offset: 100
  });
  /**/

  /*animate services item*/
  $('.service-item_1').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInLeftBig',
    offset: 200
  });
  $('.service-item_2').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInUpBig',
    offset: 200
  });
  $('.service-item_3').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInRightBig',
    offset: 200
  });
  /**/
  }
  /*animate elements END*/

  $(window).on('scroll', function () {
    stickyHeader();
  });
  $(window).resize(function () {
    sliderItemHeight();
    loginButtonsMobile()
  });
});

$(window).on('load', function () {
  stickyHeader();
  setTimeout(function () {
    $('.preloader').fadeOut('slow', function () {
    });
  }, 200);

});