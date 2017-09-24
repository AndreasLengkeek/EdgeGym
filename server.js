const bodyParser = require('body-parser');
const express = require('express');
const historyApiFallback = require('connect-history-api-fallback');
const passport = require('passport');
const morgan = require('morgan');
const config = require('./config');

// config files
const port  = process.env.PORT || 4000;



// connect to the database and load models
var mongoose = require('./server/models').connect(config.db);

const app = express();
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// tell the app to log basic info to stdout
app.use(morgan('dev'))
// pass the passport middleware
app.use(passport.initialize());

/** Setting up storage using multer-gridfs-storage */
const storage = require('multer-gridfs-storage')({
   url: config.db,
   filename: function (req, file, cb) {
       var fileName = file.filename.split('.')[0];
       var fileExt = file.filename.split('.')[file.filename.split('.').length-1];
       cb(null, fileName + '-' + Date.now() + '.' + fileExt);
   },
   /** With gridfs we can store aditional meta-data along with the file */
   metadata: function(req, file, cb) {
       cb(null, { originalname: file.originalname });
   },
   root: 'ctFiles' //root name for collection to store files into
});

//multer settings for single upload
const upload = require('multer')({
    storage: storage
}).single('file');


// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);




// API routes
const client = require('./server/routes/client.routes');
const program = require('./server/routes/program.routes');
const auth = require('./server/routes/auth.routes');
app.use('/api', client);
app.use('/api', program);
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
