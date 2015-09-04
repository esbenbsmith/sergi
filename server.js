var express = require('express');
var app = express();


// serve js and css files from public folder
app.use(express.static(__dirname + "/public"));


//STATIC ROUTES

// root route (serves index.html)
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/public/views/index.html");
  
});


// set server to localhost:3000
app.listen(process.env.PORT || 3000); 