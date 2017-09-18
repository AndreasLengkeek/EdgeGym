// imports
const bodyParser = require('body-parser');
const express = require('express');
const historyApiFallback = require('connect-history-api-fallback');
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
const morgan = require('morgan');

// config files
const config = require('../config');
const port  = process.env.PORT || 4000;

// connect to the database and load models
require('./models').connect(config.db);

var app = express();
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// tell the app to log basic info to stdout
app.use(morgan('dev'))

// API routes
const clients = require('./routes/client.routes');
const users = require('./routes/user.routes');
app.use('/api', clients);
app.use('/api', users);

// middleware to help spa with reloads and bookmarks
app.use(historyApiFallback({
 verbose: false
}));
app.use(express.static(path.join(__dirname, '../dist')));

// start server on localhost
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('>>> Open http://localhost:%s in your browser', port);
});


module.exports = app;
