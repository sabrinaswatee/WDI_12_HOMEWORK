// var request = require('request');
// var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + process.argv[2] + '&APPID=f406c9845cd234b05b4a185645cad86a';
//
// request(url, function (error, response, body) {
//   console.log('error:', error);
//   console.log('statusCode:', response && response.statusCode);
//   console.log('city:', JSON.parse(body).name);
//   console.log('temperature:', JSON.parse(body).main.temp);
// });


// DT version
var request = require('request');
var _ = require('lodash');
// var myLib = require('./myLib'); // if a file exist in the current folder

var arr = [2, 3, 4, 5, 6];
console.log(_.sample(arr));

var uri = 'http://api.openweathermap.org/data/2.5/weather';

request({
   uri: uri,
   qs: {
     q: 'melbourne, au',
     units: 'metric',
     appid: process.env.OPEN_WEATHER_APP_KEY
   }
 }, function(error, response, body) {
   var body = JSON.parse(body);
   console.log(body.main.temp);
 });
