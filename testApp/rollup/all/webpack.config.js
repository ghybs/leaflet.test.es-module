const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // https://github.com/webpack-contrib/uglifyjs-webpack-plugin
const path = require('path');

module.exports = {
  entry: {
    'testApp.webpack.all': './testApp.all.js',
    'testApp.webpack.all.min': './testApp.all.js'
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
