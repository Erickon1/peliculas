//imports
var express = require('express');
var path = require('path');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");

var films = require('./routes/films');
var index = require('./routes/index');

var app = express();
//var mongoDB = 'mongodb://127.0.0.1:27017/mydb';
//BD
//mongoose.connect(mongoDB);
//mongoose.Promise = global.Promise;
//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// view engine setup

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'twig');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/films', films);
app.use('/', index);

module.exports = app;
//run server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
