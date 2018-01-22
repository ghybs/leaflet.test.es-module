import resolve from 'rollup-plugin-node-resolve';


export default {
  input: 'src/index',
  output: {
    file: 'dist/testPlugin.all-with-export.umd-from-module.js',
    format: 'umd',
    name: 'L.Control', // When loaded directly in the browser, the exports will be attached to that namespace => slightly redundant with the manual attachments (side effect), or we could also specify a dummy namespace.
    extend: true, // Normally the default value, but make sure we do not erase what we specified in "output.name" field.
    intro: 'var umdMode = \'UMD-wrapped ES module WITH EXPORT\';', // Useful only to easily distinguish the JS file source in the rendered page.
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
