// models/user.js

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({ 
  firstname: String,
  lastname: String,
  location: String,
  language: String,
  email: String, 
  password: String
}));