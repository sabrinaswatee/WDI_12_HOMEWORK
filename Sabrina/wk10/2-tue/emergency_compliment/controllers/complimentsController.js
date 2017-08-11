var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

var complimentsController = {
  new: function(req, res) {
    console.log(req.body.new_compliment);
    compliments.push(req.body.new_compliment);
    res.redirect('/');
  },
  index: function() {

  },
  
};

module.exports = complimentsController;
