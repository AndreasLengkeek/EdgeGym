// imports
const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const historyApiFallback = require('connect-history-api-fallback');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// config files
const config = require('../config/config');
const webpackConfig = require('../webpack.config');

const isDev = process.env.NODE_ENV !== 'production';
const port  = process.env.PORT || 4000;

// Create app
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API routes
require('./routes')(app);

app.use((req, res, next) => {
  console.log(req.method + " for '" + req.originalUrl + "'");
  next();
});

if (isDev) {
  // define webpack dev server and hot loading
  const compiler = webpack(webpackConfig);

  // middleware to help spa with reloads and bookmarks
  app.use(historyApiFallback({
   verbose: false
  }));

  app.use(webpackDevMiddleware(compiler, {
     publicPath: webpackConfig.output.publicPath,
     contentBase: path.resolve(__dirname, '../client/public'),
     stats: {
       colors: true,
       hash: false,
       timings: true,
       chunks: false,
       chunkModules: false,
       modules: false
     }
  }));

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.join(__dirname, '../dist')));
} else {
  // redirect all non api routs to index page
  app.use(express.static(path.join(__dirname, '../dist')));
   app.get('*', (req, res) => {
     res.sendFile(path.resolve(__dirname, '../dist/index.html'));
     res.end();
   });
}

// start server on localhost
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('>>> Open http://localhost:%s in your browser', port);
});


module.exports = app;
