
// Declaring variables to select the four buttons as objects
var btnStart = document.querySelector('#start');
var btnFaster = document.querySelector('#faster');
var btnStop = document.querySelector('#stop');
var btnBack = document.querySelector('#back');

// Declaring variables importantly for selecting the image information provided as objects
var timerId;
var boolean;
var movePixels = 10;
var catImg = document.querySelector('#cat');
var nightImg = document.querySelector('#night');
var dayImg = document.querySelector('#day');

// Function to allow cat to move forward
// Move up higher when completed walking in night image
// Move back to starting point once walked entire width of window
var catWalk = function () {
  boolean = true;
  var currentLeft = parseInt(catImg.style.left);
  var currentTop = parseInt(catImg.style.top);

  if (currentLeft >= (window.innerWidth - catImg.width)) {
    catImg.style.left = '0px';
    catImg.style.top = '600px';
  }
  else if (currentLeft == dayImg.width - 250) {
    catImg.style.top = (currentTop - 150) + 'px';
    catImg.style.left = (currentLeft + movePixels) + 'px';
  }
  else {
    catImg.style.left = (currentLeft + movePixels) + 'px';
  }
}

// Function to allow cat to move backward
// Move down lower when completed walking in night image ??
// Move back to end of windown width once walked to starting position
var catBack = function () {
  boolean = false;
  var currentLeft = parseInt(catImg.style.left);
  var currentTop = parseInt(catImg.style.top);

  if (currentLeft <= 0) {
    catImg.style.left = (window.innerWidth - catImg.width) + 'px';
    catImg.style.top = '450px';
  }
  else if (currentLeft == dayImg.width - 250) {
    catImg.style.top = (currentTop + 150) + 'px';
    catImg.style.left = (currentLeft - movePixels) + 'px';
  }
  else {
    catImg.style.left = (currentLeft - movePixels) + 'px';
  }
}

// Calls catWalk function every 500 ms
var walk = function () {
  clearInterval (timerId);
  timerId = setInterval (catWalk, 200);
}

// Calls catWalk  or catBack function every 50 ms
var faster = function () {
  clearInterval (timerId);
  if (boolean != true) {
    timerId = setInterval (catBack, 50);
  }
  else {
    timerId = setInterval (catWalk, 50);
  }
}

// Clears setInterval with stored timerId
var stop = function () {
  clearInterval (timerId);
}

// Calls catBack function every 500 ms
var back = function () {
  clearInterval (timerId);
  timerId = setInterval (catBack, 200);
}

// Listens for button activations
btnStart.addEventListener('click', walk);
btnFaster.addEventListener('click', faster);
btnStop.addEventListener('click', stop);
btnBack.addEventListener('click', back);
