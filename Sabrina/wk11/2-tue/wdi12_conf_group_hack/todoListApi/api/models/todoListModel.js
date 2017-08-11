
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollSchema = new Schema({
  user_name: {
    type: String,
    Required: 'Kindly enter the name of the person'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  vote1: {
    type: String
  },
  vote2: {
    type: String
  }
});

module.exports = mongoose.model('Polls', PollSchema);
