//The even/odd reporter

for (var count = 0; count <= 20; count++) {
  if (count % 2 == 0) {
      console.log(count + " is even");
  }
}

// Multiplication table

for (var i = 1; i <= 10; i++) {
  for (var j = 0; j <= 10; j++) {
    console.log(i + " * " + j, " = ", i * j);
  }
}

// Your top choices

var top_choices = ['Blue', 'Green', 'Beige'];
var suffix = ['1st', '2nd', '3rd'];
for (var no = 1; no <= top_choices.length; no++) {
  console.log("My " + suffix[no - 1] + " choice is " + top_choices[no - 1]);
}

//js-day-else-if

var d = new Date();
var currentYear = d.getFullYear();
var year = Number(prompt("Enter year"));

if (year == currentYear) {
  console.log("I'm in the present!");
}
else {
  if (year < currentYear) {
    console.log("Whoa!Blast from the past!");
  }
  else if (year > currentYear) {
    console.log("Greetings from the future!");
  }
}
