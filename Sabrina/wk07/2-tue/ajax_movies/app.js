var $btn = $('button');
var $input = $('input');
var $list = $('ul');

$btn.on ('click', function (event) {

  event.preventDefault (); // allows output to stay in console

  var name = $input.val();
  var key = '2f6435d9';
  var settings = {
    url: 'http://omdbapi.com/',
    data: { s: name, apiKey: key}
  };

  $.ajax(settings).done(function(response) {
    results = response.Search;
    console.log (results);

    results.forEach(function(result) {
    // for (var count = 0; count < result.length; count++) {
      var $newItem = $('<li><li>');
      // var $newHeader = $('<h2>').addClass('info').html(result[count].Title); for adding a class name
      // var $newHeader = $('<h2></h2>');
      // $newHeader[0].textContent = result[count].Title;
      // above two lines condensed into line below
      var $newHeader = $('<h2>').html(result.Title);
      $newItem.append ($newHeader);
      $list.append ($newItem);
    });

    var $line = $('<hr>');
    $list.append ($line);
  });

});
