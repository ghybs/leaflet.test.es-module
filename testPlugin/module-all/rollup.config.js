import resolve from 'rollup-plugin-node-resolve';


export default {
  input: 'src/index',
  output: {
    file: 'dist/testPlugin.all.umd-from-module.js',
    format: 'umd',
    intro: 'var umdMode = \'UMD-wrapped ES module\';', // Useful only to easily distinguish the JS file source in the rendered page.
    globals: { // Specify the global names under which the external resources will be available.
      'leaflet': 'L'
    }
  },
  external: [ // Make sure these imports are not included in the rollup build, as the consumer will include them by other means.
    'leaflet'
  ],
  treeshake: true,
  plugins: [
    resolve() // https://github.com/rollup/rollup-plugin-node-resolve
  ]
};
