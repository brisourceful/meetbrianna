'use strict'

$(document).ready(function () {
  $('.menu').hide();
});

let indexView = {};

indexView.handleNavMenu = function () {
  $('.fa-bars').on('click', function () {
    $('.menu').show();
  });
};
