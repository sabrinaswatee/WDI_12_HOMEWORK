var select = document.querySelector ('select');
var body = document.querySelector ('body')

var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];

for (var num = 0; num < cities.length; num++) {
  var newOptionItem = document.createElement ('option');
  newOptionItem.textContent = cities[num];
  select.appendChild (newOptionItem);
}

select.addEventListener ('click', function(event) {
  var city = event.target.value;

  if (city == 'Select a City') {
    body.className = '';
  }
  else if (city == cities[3]) {
    body.className = 'austin';
    body.style.backgroundSize = 'cover';
  }
  else if (city == cities[4]) {
    body.className = 'sydney';
    body.style.backgroundSize = 'cover';
  }
  else {
    body.className = city.toLowerCase();
    body.style.backgroundSize = 'cover';
  }
});
