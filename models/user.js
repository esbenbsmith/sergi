// models/user.js

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstname: String,
  lastname: String,
  location: String,
  language: String,
  email: String
});

var User = mongoose.model('User', UserSchema);

module.exports = User;