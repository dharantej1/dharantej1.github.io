$(document).ready(function () {
  $('.card-3d').click(function () {
    var imageId = $(this).find('img').attr('id');
    var image = $(`img[id="${imageId}"]`).attr('src');
    var modal = `
      <div class="modal fade" id="imageModal" tabindex="-1" role="dialog" aria-labelledby="imageModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <img src="${image}" alt="Modal Image">
            </div>
          </div>
        </div>
      </div>
    `;

    $('body').append(modal);
    $('#imageModal').modal();
    $('#imageModal').on('hidden.bs.modal', function () {
      $('#imageModal').remove();
    });
  });
});

