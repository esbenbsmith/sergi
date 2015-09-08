var express = require('express');
var app = express();
bodyParser = require('body-parser'),  // for data from the request body
mongoose = require('mongoose');       // to interact with our db
User = require("./models/user");
var morgan      = require('morgan');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file

// connect to mongodb
mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/sergi'
);

// configure body-parser
app.use(bodyParser.urlencoded({extended: true}));


// serve js and css files from public folder
app.use(express.static(__dirname + "/public"));


//STATIC ROUTES

// root route (serves index.html)
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/public/views/index.html");
  
});


// set server to localhost:3000
app.listen(process.env.PORT || 3000); 
