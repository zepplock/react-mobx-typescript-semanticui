// production config
const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const {resolve} = require('path');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  entry: './index.tsx',
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
  mode: 'production',
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: "'production'" }
    }),
  ],
});
