var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://app:app123@ds137650.mlab.com:37650/todo-app' || 'mongodb://localhost:27017/TodoApp');


module.exports = {mongoose};