const bodyParser = require('body-parser');
const express = require('express');
const historyApiFallback = require('connect-history-api-fallback');
const favicon = require('serve-favicon');
const passport = require('passport');
const logger = require('morgan');
const config = require('./config');



// connect to the database and load models
require('./server/models').connect(config.db);

const app = express();
app.use(favicon('./dist/favicon.ico'));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// tell the app to log basic info to stdout
app.use(logger('dev'))
// pass the passport middleware
app.use(passport.initialize());

app.use((req, res, next) => {
    // add delay to simulate latency in dev environment
    setTimeout(next, 500);
})


// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);


// API routes
const client = require('./server/routes/client.routes');
const program = require('./server/routes/program.routes');
const auth = require('./server/routes/auth.routes');
const file = require('./server/routes/file.routes');
app.use('/api', client);
app.use('/api', program);
app.use('/file', file);
app.use('/auth', auth);



// middleware to help spa with reloads and bookmarks
app.use(historyApiFallback());
// tell the app to look for static files in these directories
app.use(express.static('./dist'));



// error handlers
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  console.dir(err);
  res.status(err.status || 500);
  if (err.status === 500) {
    res.json({
      error: 'Internal Server Error'
    });
  } else if (err.status === 404) {
    res.render('error'); //render error page
  } else {
    res.json({
      error: err
    })
  }
});


const port  = process.env.PORT || 4000;
// start server on localhost
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('>>> Open http://localhost:%s in your browser', port);
});


module.exports = app;
