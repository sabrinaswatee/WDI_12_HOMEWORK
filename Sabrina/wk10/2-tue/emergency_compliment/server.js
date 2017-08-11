var _ = require('lodash');
var bodyParser = require('body-parser');
var app = require('express')();
const PORT = 5000;
var complimentsController = require('./controllers/complimentsController')

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function(req, res) {
  res.render('home', {compliment: _.sample(compliments), color: _.sample(colors)});
});

app.get('/:name', function(req, res) {
  res.render('personal', { name: req.params.name, compliment: _.sample(compliments), color: _.sample(colors) });
});

// app.post('/new', function(req, res) {
//   console.log(req.body.new_compliment);
//   compliments.push(req.body.new_compliment);
//   res.redirect('/');
// });

app.post('/new', complimentsController.new);

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});
