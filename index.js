'use strict';

$(document).ready(function () {

  $(window).resize(function() {
    menuFunction();
  });

  function menuFunction () {
    if (!Modernizr.mq('(min-width: 776px)')) {
      $('#menu').removeClass('active');
    }
    else {
      $('#hamburger-menu').addClass('active');
    }
  };

  $('#hamburger-menu').click(function () {
    $(this).toggleClass('active');
    $('#menu').toggleClass('active');
  });

});
