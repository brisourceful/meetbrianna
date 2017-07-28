'use strict';

$(document).ready(function () {

  $('#hamburger-menu').click(function () {
    console.log('this happened');
    $(this).toggleClass('active');
    $('#menu').toggleClass('active');

  });


  let form = $('#contact');
  let formMessages = $('#form-messages');

  $(form).submit(function(event) {
    event.preventDefault();

    let formData = $(form).serialize();

    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    })
    .done(function(response) {
      $(formMessages).removeClass('error');
      $(formMessages).addClass('success');

      $(formMessages).text(response);

      $('#name').val('');
      $('#email').val('');
      $('#message').val('');
    })
    .fail(function(data) {
      $(formMessages).removeClass('success');
      $(formMessages).addClass('error');

      if(data.responseText !== ''){
        $(formMessages).text(data.responseText);
      } else {
        $(formMessages).text('Oops! An error occured and your message could not be sent.')
      }
    });
  });
});
