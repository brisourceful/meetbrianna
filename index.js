'use strict'

$(document).ready(function () {
  $('.toggle-nav').click(function () {
    $(this).toggleClass('active');
    $('.menu ul').toggleClass('active');

  });
});
