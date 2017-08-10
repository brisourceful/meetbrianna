'use strict';

$(document).ready(function () {

  $(window).resize(function() {
    menuFunction();
  });

  function menuFunction () {
    if (!Modernizr.mq('(min-width: 776px)')) {
      $('header').removeClass('nav-open');
    }
    else {
      $('header').addClass('nav-open');
    }
  };

  $('#hamburger-menu').click(function () {
    $('header').toggleClass('nav-open');
  });

});
