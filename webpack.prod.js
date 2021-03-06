const webpack = require('webpack');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');

/**
 * merge production specific config with common
 */
module.exports = merge(commonConfig, {
  output: {
    filename: 'js/[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  // apply uglify filters to js
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      },
      output: {
        comments: false
      }
    })
  ]
});
