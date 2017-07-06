const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');
const mongoose     = require('mongoose');
const session      = require("express-session");
const passport     = require("passport");



// import the "dotenv" package and load variables from the ".env" file
require("dotenv").config();

require("./config/passport-config.js");



mongoose.connect(process.env.MONGODB_URI);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

const dateFormat = require("dateformat");

app.locals.prettyDate =(myDate) => {
  return dateFormat(myDate, "dddd - mmmm dd yyyy - HH:MM");
};

app.locals.pTagify = (myStr) => {
  if (!myStr) {
    return "";
  }
  const listOfParagraphs = myStr.split('\n');

  const withPTags = listOfParagraphs.map((oneline) => {
    return "<p>" + oneline + "</p>";
  });
  return withPTags.join("\n");
};

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);
app.use(session({
  // The value of secret doesn't matter, but needs to be different for every app
  secret: "blah blah",
  resave: true,
  saveUninitialized: true
})); // 2 parentheses: 1 for use and 1 for session

// After app.use(session…. - IMPORTANT!!!!!!
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  // Check if the user IS logged in
  if (req.user) {
    res.locals.currentUser = req.user;
  }
  // If you dont type next(), your pages will load forever
  next();
});

// ROUTES --------------------------------------------------------

const index = require('./routes/index');
app.use('/', index);

const myAuthRoutes = require("./routes/auth-routes.js");
app.use("/", myAuthRoutes);

const myEventRoutes = require("./routes/event-routes.js");
app.use("/", myEventRoutes);

const myWorkshopRoutes = require("./routes/workshop-routes.js");
app.use("/", myWorkshopRoutes);


// ROUTES --------------------------------------------------------

// catch 404 and forward to error handler ------------------------
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// END error handler --------------------------------------------

module.exports = app;
