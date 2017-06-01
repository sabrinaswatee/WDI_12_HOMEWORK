// The recipe card

var recipeCard = {
  title: 'Sponge Cake',
  serving: 10,
  ingredients: ['Flour', 'Salt', 'Egg', 'Sugar', 'Cream', 'Vanilla']
}

console.log(recipeCard.title);
console.log("Serves: " + recipeCard.serving);
console.log("Ingredients:");

/* console.log(recipeCard.ingredients.join('\n\u2022')) can replace the for loop */

for (var no = 0; no < recipeCard.ingredients.length; no++) {
  console.log('\u2022 ' + recipeCard.ingredients[no]);
}

//
// The reading list

var readingList = [
  {
    title: 'Culture Map',
    author: 'Erin Meyer',
    alreadyRead: true
  },
  {
    title: 'Harry Potter',
    author: 'J.K.Rowling',
    alreadyRead: true
  },
  {
    title: 'A Thousand Splendid Suns',
    author: 'Khaled Hosseini',
    alreadyRead: false
  }
]

var listReading = function () {
  for (var count = 0; count < readingList.length; count++) {
    console.log(readingList[count].title + " by " + readingList[count].author);

/* can replace below line with if (readingList[count].alreadyRead) {
 its a boolean with true/false options, no need to check whether == true or not */

    if (readingList[count].alreadyRead == true) {
      console.log('You have already read "' + readingList[count].title + '" by ' + readingList[count].author);
    }
    else {
      console.log('You still need to read "' + readingList[count].title + '" by ' + readingList[count].author);
    }
  }
};
listReading();

//
// The movie database

var movieDatabase = {
  title: 'Lion',
  duration: 120,
  stars: ['Dev Patel', ' Nicole Kidman', ' Rooney Mara']
}

/* It is better to keep functions conscise and return something
 Allow the user to print it or use in other methods - more versatile
 var listMovie = function (film) {
   return (film.title + " lasts for " + film.duration + " minutes. Stars: " + film.stars.join(',') + '.');
 };
 var result = listMovie(movieDatabse);
 console.log(result); */

var listMovie = function () {
  console.log(movieDatabase.title + " lasts for " + movieDatabase.duration + " minutes. Stars: " + movieDatabase.stars + '.');
};
listMovie();

//
