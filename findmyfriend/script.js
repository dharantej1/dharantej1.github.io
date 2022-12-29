$(document).ready(function() {
    $('#search-form').submit(function(e) {
      e.preventDefault();
      var rollNumber = $('#roll-number').val().toUpperCase();
      if (rollNumber) {
        var imageUrl = 'http://teleuniv.in/sanjaya/student-images/' + rollNumber + '.jpg';
        $('#image').attr('src', imageUrl).removeClass('d-none');
        $('#download-link').attr('href', imageUrl).removeClass('d-none');
      }
    });
  });
  