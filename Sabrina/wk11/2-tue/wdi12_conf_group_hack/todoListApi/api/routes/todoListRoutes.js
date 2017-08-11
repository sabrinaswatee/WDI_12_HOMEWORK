
'use strict';

module.exports = function(app) {
  var todoList = require('../controllers/todoListController');


  // todoList Routes
  app.route('/polls')
    .get(todoList.list_all_polls)
    .post(todoList.create_a_poll);


  app.route('/polls/:pollId')
    .get(todoList.read_a_poll)
    .put(todoList.update_a_poll)
    .delete(todoList.delete_a_poll);
};
