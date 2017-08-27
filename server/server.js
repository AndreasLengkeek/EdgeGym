var bodyparser = require('body-parser');
var path = require('path');
var fs = require('fs');
var express = require('express');

// Imports
var indexRoutes = require('./routes/index');

const isDev = process.env.NODE_ENV !== 'production';
const port  = process.env.PORT || 4000;

// Create app
var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// API routes
require('./routes')(app);

if (isDev) {
  app.use(express.static(path.join(__dirname, '../dist')));
} else {
  app.use(express.static(path.join(__dirname, '../dist')));
   app.get('*', (req, res) => {
     res.sendFile(path.resolve(__dirname, '../dist/index.html'));
     res.end();
   });
}

// start server on localhost server
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('>>> Open http://localhost:%s in your browser', port);
});


module.exports = app;
