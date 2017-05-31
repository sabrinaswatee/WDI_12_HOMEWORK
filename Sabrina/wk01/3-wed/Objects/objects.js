// The recipe card

var recipeCard = {
  title: 'Sponge Cake',
  serving: 10,
  ingredients: ['Flour', 'Salt', 'Egg', 'Sugar', 'Cream', 'Vanilla']
}

console.log(recipeCard.title);
console.log("Serves: " + recipeCard.serving);
console.log("Ingredients:");
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

var listMovie = function () {
  console.log(movieDatabase.title + " lasts for " + movieDatabase.duration + " minutes. Stars: " + movieDatabase.stars + '.');
};
listMovie();

//
