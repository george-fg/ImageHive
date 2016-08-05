$(document).ready(function() {
  $('#deleteButton').click(deleteButton);
});

function deleteButton(event) {
  var size = event.target.baseURI.length -1;
  var id = event.target.baseURI.charAt(size);

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
