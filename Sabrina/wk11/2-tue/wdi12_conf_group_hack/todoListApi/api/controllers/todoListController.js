
'use strict';

var mongoose = require('mongoose'),
  Poll = mongoose.model('Polls');

var end = new Date('08/10/2017 01:00 AM');
var now = new Date();
var timer = Math.round(((end.getTime() - now.getTime()))) > 0;


exports.list_all_polls = function(req, res) {
  Poll.find({}, function(err, poll) {
    if (err)
      res.send(err);
    res.json(poll);
  });
};


exports.create_a_poll = function(req, res) {
  if(timer) {
    var new_poll = new Poll(req.body);
    new_poll.save(function(err, poll) {
      if (err)
        res.send(err);
      res.json(poll);
    });
  }
  else {
    res.json({ message: 'Time is up!' });
  }
};


exports.read_a_poll = function(req, res) {
  Poll.findById(req.params.pollId, function(err, poll) {
    if (err)
      res.send(err);
    res.json(poll);
  });
};


exports.update_a_poll = function(req, res) {
  if(timer) {
    Poll.findOneAndUpdate({_id: req.params.pollId}, req.body, {new: true}, function(err, poll) {
      if (err)
        res.send(err);
      res.json(poll);
    });
  }
  else {
    res.json({ message: 'Time is up!' });
  }
};


exports.delete_a_poll = function(req, res) {
  if(timer) {
    Poll.remove({
      _id: req.params.pollId
    }, function(err, poll) {
      if (err)
        res.send(err);
      res.json({ message: 'Poll successfully deleted' });
    });
  }
  else {
    res.json({ message: 'Time is up!' });
  }
};
