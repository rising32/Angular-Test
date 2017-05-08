//use express dependancy for node work
var express = require('express');
var app = express();


//setup directories for server access
app.use(express.static('public'));
app.use(express.static('node_modules'));


//catch all back to home when accessing non-existant route
app.all('*', function(req, res) {
  res.sendFile(__dirname + "/public/index.html")
});

// error handler to catch 404 and forward to main error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// main error handler
// warning - not for use in production code!
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});

//declare port (heroku publication)
var port = /*process.env.PORT ||*/ 8090;

//start listening
app.listen(port, function () {
  console.log(port + " is listening");
});