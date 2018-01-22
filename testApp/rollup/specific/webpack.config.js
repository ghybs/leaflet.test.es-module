const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // https://github.com/webpack-contrib/uglifyjs-webpack-plugin
const path = require('path');

module.exports = {
  entry: {
    'testApp.webpack.specific': './testApp.specific.js',
    'testApp.webpack.specific.min': './testApp.specific.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', '..', 'dist')
  },
  plugins: [
    new UglifyJSPlugin({
      include: /\.min\.js$/
    })
  ]
};
