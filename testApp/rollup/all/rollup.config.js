import resolve from 'rollup-plugin-node-resolve';


export default {
  input: 'testApp.all.js',
  output: {
    file: '../../dist/testApp.rollup.all.js',
    format: 'iife'
  },
  treeshake: true,
  plugins: [
    resolve() // https://github.com/rollup/rollup-plugin-node-resolve
  ]
};
