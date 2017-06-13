/*
game starts with a randomly selected word shown as underscores. eg. for example the word cake will be shown as four underscores
user can press any letter keys to make a guess
wrong guesses goes to the top left
correct letter guesses replace underscores
amount of turns left shown on top right
*/

var guessedLettersScreen = document.querySelector ('#guessedLetters');
var turnsLeftScreen = document.querySelector ('#turnsLeft');
var wordGuessScreen = document.querySelector ('#wordGuess');
var input = document.querySelector ('#input');

var wordsList = ['Beneficial', 'Brainstorm', 'Charitable', 'Confidence', 'Contribute',
                 'Dedication', 'Delightful', 'Deluctable', 'Excellence', 'Flamboyant',
                 'Incredible', 'Impeccable', 'Innovation', 'Jubilation', 'Marvellous',
                 'Noteworthy', 'Openminded', 'Outperform', 'Passionate', 'Productive',
                 'Persuasive', 'Remarkable', 'Simplicity', 'Successful', 'Supportive',
                 'Thoughtful', 'Uncritical', 'Understand', 'Unreserved', 'Worthwhile'];

var word;
var turns;
var turnsArray = [];
var guessArray = [];
var spaceArray = [];

var turnsLeft = function () {
  turnsArray = [];
  for (var turnsCounter = 0; turnsCounter < turns; turnsCounter++) {
    turnsArray.push('x');
  }
  turnsLeftScreen.textContent = turnsArray.join('');
};

var createSpaces = function () {
  spaceArray = [];
  for (var spaceCounter = 0; spaceCounter < word.length; spaceCounter++) {
    spaceArray.push(' ____ ');
  }
  wordGuessScreen.textContent = spaceArray.join(' ');
};

var keepPlaying = function () {
  turns--;
  turnsLeft ();

  if (turns != 0) {
    playGame ();
  }
  else {
    wordGuessScreen.textContent = 'End of game!';
  }
}

var replaceLetters = function (letter) {
  if (word.indexOf(letter) > -1) {
    for (var i = 0; i < word.length; i++) {
      if (letter.toUpperCase() == word[i].toUpperCase()) {
        spaceArray[i] = letter.toUpperCase();
      }
      else {
        continue;
      }
    }
    wordGuessScreen.textContent = spaceArray.join(' ');
  }
  else {
    guessArray.push(letter.toUpperCase());
    guessedLettersScreen.textContent = guessArray.join(' ');
  }
  keepPlaying ();
};

var playGame = function () {
  input.addEventListener ('keyup', function (event) {
    if (event.which > 64 && event.which < 91) {
      var keyBoard = event.which;
      var letter = String.fromCharCode(keyBoard);
      replaceLetters (letter);
      input.value = '';
    }
    // else {
    //   wordGuessScreen.textContent = 'Guess a letter!';
    // }
  });
};

wordGuessScreen.textContent = 'Press enter to start';
input.addEventListener ('keyup', function (event) {
  if (event.which == 13) {
    word = wordsList [Math.floor (Math.random() * wordsList.length)];
    turns = word.length + 1;
    // guessArray = [];
    // guessedLettersScreen.textContent = guessArray.join(' ');
    turnsLeft ();
    createSpaces ();
    playGame ();
  }
});
