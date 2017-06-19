// DOM
var main = document.getElementsByTagName ('main')[0];
var start = document.getElementsByTagName ('button')[0];
var pause = document.getElementsByTagName ('button')[1];
var timed = document.getElementsByTagName ('button')[2];
var reset = document.getElementsByTagName ('button')[3];
var boxes = document.querySelectorAll ('[data-cell]');
var player1 = document.querySelector ('#player1');
var player2 = document.querySelector ('#player2');
var userX = document.querySelector ('#user1');
var userO = document.querySelector ('#user2');
var countX = document.querySelector ('#countX');
var countY = document.querySelector ('#countY');
var timerMessage = document.querySelector ('#timer');
var gameCount = document.querySelector ('#countGame');

var winCounter = [0, 0]; // counting win for each symbol
var counter = 0; // keeping track of number of empty divs
var clearTime = 0; // time from set timeout
var timerId = 0; // time for set interval
var timer; // input from user
var xoArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8']; // array for storing X and O inputs
var boxClicked; // stores the index number of the div which is clicked
var user1 = 'Player 1'; // user name 1
var user2 = 'Player 2'; // user name 2
var boolean1; // keep track of whether game is paused or not
var boolean2; // keeps track of whether game is in timed mode or not
var pauseOrResume = 0; // keep track of whether to pause or resume
var gameCounter = 0; // counts number of games played

// clears the counter, array for storing X & O, and board for next game
var playAgain = function () {
  clearTimeout (clearTime);
  counter = 0;
  xoArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
  gameCount.textContent = gameCounter;
  player1.className = 'notPlaying';
  player2.className = 'notPlaying';
  for (var i = 0; i < 9; i++) {
    boxes[i].textContent = '';
  }
};

// resets all variable to their original status and calls the playAgain function
var resetGame = function () {
  timed.className = '';
  timed.disabled = false;
  winCounter = [0, 0];
  timerMessage.textContent = '';
  clearInterval (timerId);
  timerId = 0;
  countX.textContent = winCounter[0];
  countY.textContent = winCounter[1];
  boolean2 = false;
  gameCounter = 0;
  user1 = 'Player 1';
  user2 = 'Player 2';
  userX.textContent = user1;
  userO.textContent = user2;
  playAgain ();
};

// updates timer every second
var updateTime = function () {
  boolean1 = false;
  timerMessage.textContent = timer;
  timerId = setInterval (function () {
    timer--;
    timerMessage.textContent = timer;
    if (timer == 0) {
      timed.className = '';
      timed.disabled = false;
      boolean2 = true;
      clearInterval (timerId);
    }}, 1000);
};

// takes input from user for timed mode and calls updateTime function
var timedGame = function () {
  timed.className = 'disabledButton';
  timed.disabled = true;
  clearInterval (timerId);
  timer = prompt ('Set time in seconds: ');
  if (timer > 0) {
    boolean2 = false;
    updateTime ();
  }
};

// if game in timed mode, this function toggles between pausing and resuming (by caling updateTime function)
var pauseGame = function () {
  if (boolean2 == false) {
    if (pauseOrResume % 2 == 0) {
      clearInterval (timerId);
      boolean1 = true;
      pause.textContent = 'Resume';
      timerMessage.textContent = timer;
      pauseOrResume++;
    }
    else {
      pause.textContent = 'Pause';
      updateTime ();
      pauseOrResume++;
    }
  }
};

// updates win counter, game counter and calls playAgain fucntion
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
  gameCounter++;
  gameCount.textContent = gameCounter;
  clearTime = setTimeout (playAgain, 300);
};

// checks through all the rules for winning and passes to winner function; else alerts draw; calls playAgain function
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
    alert ('Draw');
    clearTime = setTimeout (playAgain, 300);
  }
};

// prints on screen X and O if empty div box, not on pause, and not on timed mode ending 0
// pushes the X and O into the correct boxcliked index in an array and calls checkWinner function
var playGame = function (event) {
  if (event.target.tagName === 'DIV') {
    if (event.target.textContent != 'X' && event.target.textContent != 'O' && boolean1 != true && boolean2 != true) {
        event.target.className = 'disColor';
      boxClicked = event.target.getAttribute ('data-cell') - 1;
      if (counter % 2 == 0) {
        player1.className = 'notPlaying';
        player2.className = 'playing';
        event.target.textContent = 'X';
      }
      else {
        player2.className = 'notPlaying';
        player1.className = 'playing';
        event.target.textContent = 'O';
      }
      xoArray[boxClicked] = event.target.textContent;
      counter++;
      checkWinner ();
    }
  }
};

// prompts user input for user name, otherwise default to player 1 and player 2
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

// event listeners
start.addEventListener ('click', startGame);
timed.addEventListener ('click', timedGame);
pause.addEventListener ('click', pauseGame);
reset.addEventListener ('click', resetGame);
main.addEventListener ('click', playGame);

// event listeners with fucntion for changing div colors when hovering over them
main.addEventListener ('mouseover', function (event) {
  if (event.target.tagName === 'DIV') {
    event.target.className = 'color';
  }
});
main.addEventListener ('mouseout', function (event) {
  if (event.target.tagName === 'DIV') {
    event.target.className = 'disColor';
  }
});
