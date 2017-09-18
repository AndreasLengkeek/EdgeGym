const bodyParser = require('body-parser');
const express = require('express');
const historyApiFallback = require('connect-history-api-fallback');
const path = require('path');
const passport = require('passport');
const morgan = require('morgan');
const config = require('./config');

// config files
const port  = process.env.PORT || 4000;

// connect to the database and load models
require('./server/models').connect(config.db);

const app = express();
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// tell the app to log basic info to stdout
app.use(morgan('dev'))
// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// API routes
const api = require('./server/routes/client.routes');
const auth = require('./server/routes/auth.routes');
app.use('/api', api);
app.use('/auth', auth);

// middleware to help spa with reloads and bookmarks
app.use(historyApiFallback());
// tell the app to look for static files in these directories
app.use(express.static('./dist'));

// start server on localhost
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('>>> Open http://localhost:%s in your browser', port);
});


module.exports = app;
