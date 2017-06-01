// JS Variables

var captain = "Jack";
var phrase = "Oh ".concat(captain.concat(", my ".concat(captain.concat("!"))));

//
// JS Conditionals

var souls = 3;
var lifeRafts = 2;

if (souls > lifeRafts) {
  console.log("SOS!");
}

//
// Data Structures - JS Arrays

var weekend = ['Saturday'];
weekend.push('Sunday');
weekend.unshift('Friday');
var day = weekend[1];
weekend.splice(0,1);

//
// Data Structures - JS Objects

var brain = {
  energyLevel: 10
}
var energy = brain.energyLevel;
brain.dream = 'electric sheep';

//
// JS Functions

var rectangleArea = function (length, width) {
  return length * width;
}
var area = rectangleArea (3, 4);

//
