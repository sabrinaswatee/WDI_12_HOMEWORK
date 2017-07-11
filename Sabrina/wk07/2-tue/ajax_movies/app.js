var $btn = $('button');
var $input = $('input');
var $list = $('ul');

$btn.on ('click', function (event) {

  event.preventDefault ();

  var name = $input.val();
  var key = ENV['OMDB_API_KEY'];
  var settings = {
    url: 'http://omdbapi.com/',
    data: { s: name, apiKey: key}
  };

  $.ajax(settings).done(function(response) {
    result = response.Search;
    console.log (result);

    for (var count = 0; count < result.length; count++) {
      var $newItem = $('<li></li>');
      var $newHeader = $('<h2></h2>');
      $newHeader[0].textContent = result[count].Title;
      $newItem.append ($newHeader);
      $list.append ($newItem);
    }

    var $line = $('<hr>');
    $list.append ($line);
  });

});
