var $btn = $('button');
var $input = $('input');

$btn.on ('click', function (event) {

  event.preventDefault ();

  var loadGiffy = function (giffySetting) {
    $.ajax(giffySetting).done(function(response) {
      console.log (response);
      var giffies = response.data;
      giffies.forEach (function(giffy) {

        var source = $('#giffy-result-template').html();
        var template = Handlebars.compile(source);
        var html = template({ url: giffy.url});
        console.log (giffy.url);
        $('.response').append( html );

      });

    });
  };

  var name = $input.val();
  var offset = 0;
  var giffySetting = {
    url: 'https://api.giphy.com/v1/gifs/search',
    data: { api_key: '3b3542e9b7654951aa379eecd9b72f63', q: name, limit: 10, offset: offset }
  };
  loadGiffy (giffySetting);

  $(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
      offset = offset + 10;
      var giffySetting = {
        url: 'https://api.giphy.com/v1/gifs/search',
        data: { api_key: '3b3542e9b7654951aa379eecd9b72f63', q: name, limit: 10, offset: offset }
      };
      loadGiffy (giffySetting);
    };
  });

  // https://api.giphy.com/v1/gifs/search?api_key=3b3542e9b7654951aa379eecd9b72f63&q=&q=jaws

});
