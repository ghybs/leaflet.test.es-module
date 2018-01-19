import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';


export default {
  input: 'testApp.specific-plugin-all.js',
  output: {
    file: '../../dist/testApp.rollup.specific-plugin-all.js',
    format: 'iife'
  },
  treeshake: true,
  plugins: [
    resolve(), // https://github.com/rollup/rollup-plugin-node-resolve
    json()
  ]
};
