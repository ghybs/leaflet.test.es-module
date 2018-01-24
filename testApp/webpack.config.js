const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // https://github.com/webpack-contrib/uglifyjs-webpack-plugin
const path = require('path');


const appFolder = process.cwd(); // The directory from which the script was called, i.e. the app folder.
const pkg = require(path.resolve(appFolder, 'package.json'));
const inputName = path.resolve(appFolder, pkg.input);
const outputName = 'testApp.webpack.' + pkg.main;
const outputNameMin = outputName + '.min';

module.exports = {
  entry: {
    [outputName]: inputName,
    [outputNameMin]: inputName
  },
  output: {
    filename: '[name].js',
    path: path.resolve(appFolder, '..', 'dist')
  },
  plugins: [
    new UglifyJSPlugin({
      include: /\.min\.js$/
    })
  ]
};
