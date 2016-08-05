$(document).ready(function() {
  $('#deleteButton').click(deleteButton);
});

function deleteButton(event) {
  var urlArr = event.target.baseURI.split('/');
  var id = urlArr[urlArr.length - 1];
  $.ajax({
    url: '/post/'+ id,
    type: 'DELETE',
    success: function(result) {
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    }
  });

  window.location.href = "/";
}
