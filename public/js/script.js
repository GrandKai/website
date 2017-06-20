/**
 * Created by zhangyn on 17-6-20.
 */

$(function () {
  $('#post-comment').hide();
  $('#btn-comment').on('click', function(event) {
    event.preventDefault();
    $('#post-comment').show();

  });

  $('#btn-like').on('click', function (event) {
    event.preventDefault();

    var imgId = $(this).data('id');
    console.log("imgId: ", imgId);
    $.post('/images/' + imgId + '/like').done(function (data) {
      $('.likes-count').text(data.likes);
    })
  })
});
