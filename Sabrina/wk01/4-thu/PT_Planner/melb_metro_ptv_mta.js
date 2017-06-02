// Melbourne Public Transport Journey Planner

/*
Array of station list and Array of Objects on train lines
*/
var stationList = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie',
                   'Flagstaff', 'Melbourne Central', 'Parliament', 'Kooyong', 'Tooronga', 'Southern Cross',
                   'South Yarra', 'Prahran', 'Windsor','Auburn', 'Surrey Hills', 'Blackburn', 'Ringwood',
                   'Lilydale', 'Caulfield', 'Oakleigh', 'Noble Park', 'Yarraman', 'Hallam', 'Pakenham',
                   'Werribee', 'Newport', 'Malvern', 'Patterson', 'Chelsea', 'Frankston'];
var trainLines = [
  {
    name: 'Alamein',
    stations: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
  },
  {
    name: 'Glen Waverly',
    stations: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']
  },
  {
    name: 'Sandringham',
    stations: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
  },
  {
    name: 'Lilydale',
    stations: ['Richmond', 'Auburn', 'Surrey Hills', 'Blackburn', 'Ringwood', 'Lilydale']
  },
  {
    name: 'Pakenham',
    stations: ['Richmond', 'Caulfield', 'Oakleigh', 'Noble Park', 'Yarraman', 'Hallam', 'Pakenham']
  },
  {
    name: 'Frankston',
    stations: ['Werribee', 'Newport', 'Richmond', 'Malvern', 'Patterson', 'Chelsea', 'Frankston']
  }
]

/*
Starting the journey planner
*/
alert ('Welcome to Melbourne Public Transport Journey Planner');

/*
Prints out origin and destination
Sends the origin, destination to travelMerged in on different line
Sends the origin, destination and line number to findIndexUnmerged if on same line
*/
var travelPlanner = function (origin, destination) {
  console.log ('Origin: ' + origin + '\n' + 'Destination: ' + destination);
  for (var line = 0; line < trainLines.length; line++) {
      var lineString = trainLines[line].stations.toString();
      if (lineString.includes(origin) && lineString.includes(destination)) {
        var boolean = true;
        findIndexUnmerged (origin, destination, line);
      }
  }
  if (!boolean) {
    travelMerged (origin, destination);
  }
}

/*
Takes origin and destination on different lines and finds the line number
Sends the origin, destination, and the two line numbers to fiindIndexMerged
*/
var travelMerged = function (origin, destination) {
  for (var line = 0; line < trainLines.length; line++) {
    var lineString = trainLines[line].stations.toString();
    if (lineString.includes(origin)) {
      var startLine = line;
    }
    else if (lineString.includes(destination)) {
      var endLine = line;
    }
  }
  findIndexMerged (origin, destination, startLine, endLine);
}

/*
Calculates the position of origin and destination
Sends the positions to two separate fucntions as necessary - forward or backward route & prints out
Sends the positions to calculate no. of stops & prints out
*/
var findIndexUnmerged = function (origin, destination, line) {
  var beginning = trainLines[line].stations.indexOf(origin);
  var ending = trainLines[line].stations.indexOf(destination);
  if (ending - beginning >= 0) {
    var route = forwardRoute (beginning, ending, line);
  }
  else {
    var route = backwardRoute (ending, beginning, line);
  }
  var stop = stops (beginning, ending);
  console.log (route + '\n' + stop);
  // alert ('Thank you for using the service!');
}

/*
Calculates the position of origin, destination, and Richmond on the separate lines
Sends the positions to mergedRoute
*/
var findIndexMerged = function (origin, destination, startLine, endLine) {
  var interchangeOne = trainLines[startLine].stations.indexOf('Richmond');
  var interchangeTwo = trainLines[endLine].stations.indexOf('Richmond');
  var beginning = trainLines[startLine].stations.indexOf(origin);
  var ending = trainLines[endLine].stations.indexOf(destination);
  mergedRoute (beginning, ending, interchangeOne, interchangeTwo, startLine, endLine);
}

/*
Slices the section of route from the line and returns as a joined string
*/
var forwardRoute = function (beginning, ending, line) {
  return trainLines[line].stations.slice(beginning, ending + 1).join(' -----> ');
}

/*
Slices the section of route from the line, reverses it and returns as a joined string
*/
var backwardRoute = function (beginning, ending, line) {
  return trainLines[line].stations.slice(beginning, ending + 1).reverse().join(' -----> ');
}

/*
Calls relevant function for finding routes, concatenates them and prints out
Calls mergedStops and prints out no of stops
*/
var mergedRoute = function (beginning, ending, interchangeOne, interchangeTwo, startLine, endLine) {
  if (interchangeOne - beginning >= 0) {
    var routeOne = forwardRoute (beginning, interchangeOne, startLine);
  }
  else {
    var routeOne = backwardRoute (interchangeOne, beginning, startLine);
  }
  if (ending - interchangeTwo >= 0) {
    var routeTwo = forwardRoute (interchangeTwo + 1, ending, endLine);
  }
  else {
    var routeTwo = backwardRoute (ending, interchangeTwo - 1, endLine);
  }
  console.log (routeOne.concat(' -----> '.concat(routeTwo)));
  mergedStops (beginning, ending, interchangeOne, interchangeTwo);
}

/*
Calculates no of stops for route on the same line
*/
var stops = function (start, stop) {
  if (stop - start == 1) {
    return (Math.abs(stop - start) + ' stop total');
  }
  else {
    return (Math.abs(stop - start) + ' stops total');
  }
}

/*
Calculates no of stops for route on different lines
*/
var mergedStops = function (start, stop, changeOne, changeTwo) {
  var stopsOne = Math.abs(changeOne - start);
  var stopsTwo = Math.abs(changeTwo - stop);
  console.log ((stopsOne + stopsTwo) + ' stops total');
  // alert ('Thank you for using the service!');
}

/*
Prompts user input for origin and destination and calls function
?? Iterates if user inputs anything other than station names ??
*/
var origin = prompt("What's your origin?");
while (!stationList.includes(origin)) {
  var origin = prompt("What's your origin?");
}
var destination = prompt("What's your destination?");
while (!stationList.includes(destination)) {
  var destination = prompt("What's your destination?");
}
travelPlanner (origin, destination);
alert ('Thank you for using the service!');
//
