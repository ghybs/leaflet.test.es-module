import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'; // For importing 3rd party libs that are only available as UMD-wrapped, not directly as ES module.
import json from 'rollup-plugin-json';
import {minify} from 'uglify-es';
import uglify from 'rollup-plugin-uglify';


const appFolder = process.cwd(); // The directory from which the script was called, i.e. the app folder.
const pkg = require(path.resolve(appFolder, 'package.json'));
const inputName = path.resolve(appFolder, pkg.input);
const outputName = path.resolve(appFolder, '..', 'dist', 'testApp.rollup.' + pkg.main);

const sourceConfig = {
  input: inputName,
  output: {
    file: outputName + '.js',
    format: 'iife'
  },
  treeshake: true,
  plugins: [
    resolve(), // https://github.com/rollup/rollup-plugin-node-resolve
    json(), // https://github.com/rollup/rollup-plugin-json
    commonjs() // https://github.com/rollup/rollup-plugin-commonjs
  ]
};

const minifiedConfig = {
  input: inputName,
  output: {
    file: outputName + '.min.js',
    format: 'iife'
  },
  treeshake: true,
  plugins: [
    resolve(), // https://github.com/rollup/rollup-plugin-node-resolve
    json(), // https://github.com/rollup/rollup-plugin-json
    commonjs(), // https://github.com/rollup/rollup-plugin-commonjs
    uglify({}, minify) // https://github.com/TrySound/rollup-plugin-uglify
  ]
};


export default [
  sourceConfig,
  minifiedConfig
];
