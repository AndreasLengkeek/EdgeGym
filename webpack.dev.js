const webpack = require('webpack');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');

/**
 * merge dev specific config with common
 */
module.exports = merge(commonConfig, {
  output: {
    filename: 'js/[name].js',
    chunkFilename: '[id].chunk.js'
  }
});
