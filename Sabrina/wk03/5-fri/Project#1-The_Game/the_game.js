var main = document.getElementsByTagName ('main')[0];
var start = document.getElementsByTagName ('button')[0];
var timed = document.getElementsByTagName ('button')[1];
var pause = document.getElementsByTagName ('button')[2];
var reset = document.getElementsByTagName ('button')[3];
var boxes = document.querySelectorAll ('[data-cell]');
var player1 = document.querySelector ('#player1');
var player2 = document.querySelector ('#player2');
var userX = document.querySelector ('#user1');
var userO = document.querySelector ('#user2');
var countX = document.querySelector ('#countX');
var countY = document.querySelector ('#countY');
var timerMessage = document.querySelector ('#timer');

var winCounter = [0, 0];
var counter = 0;
var clearTime = 0;
var timerId = 0;
var timer = 0;
var time;
var xoArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
var boxClicked;
var user1;
var user2;

var playAgain = function () {
  clearTimeout (clearTime);
  counter = 0;
  xoArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
  player1.className = 'notPlaying';
  player2.className = 'notPlaying';
  for (var i = 0; i < 9; i++) {
    boxes[i].textContent = '';
  }
};

var resetGame = function () {
  playAgain ();
  winCounter = [0, 0];
  timer = 0;
  clearInterval (timerId);
  timerId = 0;
  timerMessage.textContent = timer;
  countX.textContent = winCounter[0];
  countY.textContent = winCounter[1];
};

var updateTime = function (time) {
  if (timer == time) {
    clearInterval (timerId);
  }
  else {
    timerId = setInterval (function () {
      timer++;
      timerMessage.textContent = timer;}
    , 1000);
  }
};

var timedGame = function () {
  time = prompt ('Set time in seconds: ');
  updateTime (time);
};

var pauseGame = function () {
  pause.textContent = 'Resume';
  pause.addEventListener ('click', function () {updateTime (time)});
  clearInterval (timerId);
  timerMessage.textContent = timer;
};

var winner = function (player) {
  if (player == 'X') {
    winCounter[0]++;
    console.log ('Winner: ' + user1);
  }
  else {
    winCounter[1]++;
    console.log ('Winner: ' + user2);
  }
  countX.textContent = winCounter[0];
  countY.textContent = winCounter[1];
  clearTime = setTimeout (playAgain, 1000);
};

var checkWinner = function () {
  if (xoArray[0] == xoArray[1] && xoArray[0] == xoArray[2]) {
    winner (xoArray[0]);
  }
  else if (xoArray[3] == xoArray[4] && xoArray[3] == xoArray[5]) {
    winner (xoArray[3]);
  }
  else if (xoArray[6] == xoArray[7] && xoArray[6] == xoArray[8]) {
    winner (xoArray[6]);
  }
  else if (xoArray[0] == xoArray[3] && xoArray[0] == xoArray[6]) {
    winner (xoArray[0]);
  }
  else if (xoArray[1] == xoArray[4] && xoArray[1] == xoArray[7]) {
    winner (xoArray[1]);
  }
  else if (xoArray[2] == xoArray[5] && xoArray[2] == xoArray[8]) {
    winner (xoArray[2]);
  }
  else if (xoArray[0] == xoArray[4] && xoArray[0] == xoArray[8]) {
    winner (xoArray[0]);
  }
  else if (xoArray[2] == xoArray[4] && xoArray[2] == xoArray[6]) {
    winner (xoArray[2]);
  }
  else if (counter == 9) {
    console.log ('Draw');
    clearTime = setTimeout (playAgain, 1000);
  }
};

var playGame = function (event) {
  if (event.target.textContent != 'X' && event.target.textContent != 'O') {
      event.target.className = 'disColor';
    boxClicked = event.target.getAttribute ('data-cell') - 1;
    if (counter % 2 == 0) {
      player1.className = 'notPlaying';
      player2.className = 'playing';
      event.target.textContent = 'X';
      // event.target.innerHTML = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZRgSTib2b8l4nE666fwczwTY7AQ2MtRnyjqbM8X7HoOL-jpmvyFiipLx'>";
    }
    else {
      player2.className = 'notPlaying';
      player1.className = 'playing';
      event.target.textContent = 'O';
      // event.target.innerHTML = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZRgSTib2b8l4nE666fwczwTY7AQ2MtRnyjqbM8X7HoOL-jpmvyFiipLx'>";
    }
    xoArray[boxClicked] = event.target.textContent;
    counter++;
    checkWinner ();
  }
};

var startGame = function () {
  user1 = prompt ('User Name X: ');
  user2 = prompt ('User Name O: ');
  if (user1 == '') {
    user1 = 'Player 1';
    userX.textContent = user1;
  }
  else {
    userX.textContent = user1;
  }
  if (user2 == '') {
    user2 = 'Player 2';
    userO.textContent = user2;
  }
  else {
    userO.textContent = user2;
  }
};

start.addEventListener ('click', startGame);
timed.addEventListener ('click', timedGame);
pause.addEventListener ('click', pauseGame);
reset.addEventListener ('click', resetGame);
main.addEventListener ('click', playGame);

main.addEventListener ('mouseover', function (event) {
  event.target.className = 'color';
});
main.addEventListener ('mouseout', function (event) {
  event.target.className = 'disColor';
});
