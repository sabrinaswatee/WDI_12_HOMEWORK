// var select = document.querySelector ('select');
// var body = document.querySelector ('body')
//
// var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];
//
// for (var num = 0; num < cities.length; num++) {
//   var newOptionItem = document.createElement ('option');
//   newOptionItem.textContent = cities[num];
//   select.appendChild (newOptionItem);
// }
//
// select.addEventListener ('click', function(event) {
//   var city = event.target.value;
//   console.log (city);
//
//   if (city == 'Select a City') {
//     body.className = '';
//   }
//   else if (city == cities[3]) {
//     body.className = 'austin';
//     body.style.backgroundSize = 'cover';
//   }
//   else if (city == cities[4]) {
//     body.className = 'sydney';
//     body.style.backgroundSize = 'cover';
//   }
//   else {
//     body.className = city.toLowerCase();
//     body.style.backgroundSize = 'cover';
//   }
// });


var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

var selection = document.querySelector("select");

for (var i = 0; i < cities.length; i++) {
    var newOption = document.createElement("option");
    newOption.textContent = cities[i]
    selection.appendChild(newOption);
};

var option = document.getElementById("city-type");
var option1 = option.selectedIndex;
var body = document.querySelector("body");
console.log(option);

var changeImage = function(event) {
    console.log(event.target);
    console.log(event.target.selectedIndex);
    if (option.selectedIndex == 1) {
        body.className = "nyc";
    } else if (option.selectedIndex == 2) {
        body.className = "sf";
    } else if (option.selectedIndex == 3) {
        body.className = "la";
    } else if (option.selectedIndex == 4) {
        body.className = "austin";
    } else if (option.selectedIndex == 5) {
        body.className = "sydney";
    }
};

option.addEventListener("click", changeImage);
