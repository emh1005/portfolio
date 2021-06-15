/*$(document).ready(function () {
  var breakpoint = 840;

  // If the screen is smaller then 840px wide remove all classes.
  if ($(window).width() < breakpoint) {
    $('.js-slidein').removeClass('js-slidein');
  }

  // Check which of the elements with this class is visible on the page
  $('.js-slidein').each(function (i) {
    var bottomObject = $(this).offset().top;
    var bottomWindow = $(window).scrollTop() + $(window).height();

    if (bottomWindow > bottomObject) {
      $(this).removeClass('js-slidein');
    }
  });

  // Trigger the slide-in effect on scroll
  $(window).scroll(function () {
    $('.js-slidein').each(function (i) {
      var bottomObject = $(this).offset().top + $(this).outerHeight() / 3;
      var bottomWindow = $(window).scrollTop() + $(window).height();

      if (bottomWindow > bottomObject) {
        $(this).addClass('js-slidein-visible');
      }
    });
  });
});*/


$(document).ready(function () {
  var breakpoint = 840;

  // If the screen is smaller then 840px wide remove all classes.
  if ($(window).width() < breakpoint) {
    $('.js-slidein-left').removeClass('js-slidein-left');
    $('.js-slidein-right').removeClass('js-slidein-right');
  }

  // Check which of the elements with this class is visible on the page
  $('.js-slidein').each(function (i) {
    var bottomObject = $(this).offset().top;
    var bottomWindow = $(window).scrollTop() + $(window).height();

    if (bottomWindow > bottomObject) {
      $(this).removeClass('js-slidein');
    }
  });

  $('.js-slidein-left').each(function (i) {
    var bottomObject = $(this).offset().top;
    var bottomWindow = $(window).scrollTop() + $(window).height();

    if (bottomWindow > bottomObject) {
      $(this).removeClass('js-slidein-left');
    }
  });
    // Check which of the elements with this class is visible on the page
  $('.js-slidein-right').each(function (i) {
    var bottomObject = $(this).offset().top;
    var bottomWindow = $(window).scrollTop() + $(window).height();

    if (bottomWindow > bottomObject) {
      $(this).removeClass('js-slidein-right');
    }
  });

  // Trigger the slide-in effect on scroll
  $(window).scroll(function () {
    $('.js-slidein').each(function (i) {
      var bottomObject = $(this).offset().top + $(this).outerHeight() / 3;
      var bottomWindow = $(window).scrollTop() + $(window).height();

      if (bottomWindow > bottomObject) {
        $(this).addClass('js-slidein-visible');
      }
    });

    $('.js-slidein-left').each(function (i) {
      var bottomObject = $(this).offset().top + $(this).outerHeight() / 3;
      var bottomWindow = $(window).scrollTop() + $(window).height();

      if (bottomWindow > bottomObject) {
        $(this).addClass('js-slidein-left-visible');
      }
    });

    $('.js-slidein-right').each(function (i) {
      var bottomObject = $(this).offset().top + $(this).outerHeight() / 3;
      var bottomWindow = $(window).scrollTop() + $(window).height();

      if (bottomWindow > bottomObject) {
        $(this).addClass('js-slidein-right-visible');
      }
    });
  });
});




/*
window.onload= function () {
  var breakpoint = 840;

  // If the screen is smaller then 840px wide remove all classes.
  if (window.innerwidth < breakpoint) {
    document.querySelector('.js-slidein').removeClass('js-slidein');
  }

  // Check which of the elements with this class is visible on the page
  var check = document.querySelectorAll('.js-slidein');
  var i;
  for (i = 0; i < check.length; i++){
    var bottomObject = check[i].offsetTop;
    var bottomWindow = window.scrollTop + window.innerheight;

    if (bottomWindow > bottomObject) {
      check[i].removeClass('js-slidein');
    }
  };

  // Trigger the slide-in effect on scroll
  window.scroll(function () {
    var j;
  for (j = 0; j < check.length; j++){
    document.querySelector('.js-slidein').each(function (i) {
      var bottomObject = check[j].offsetTop + document.querySelector(this).outerHeight() / 3;
      var bottomWindow = document.querySelector(window).scrollTop + document.querySelector(window).height();

      if (bottomWindow > bottomObject) {
        document.querySelector(this).classList.add('js-slidein-visible');
      }
    };
  };
};*/