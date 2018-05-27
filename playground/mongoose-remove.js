const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({id}).then((result) => {

// });

// Todo.findByIdAndRemove('5b0a8ecd3362424cc553a9e2').then((todo) => {
//   console.log(todo);
// });