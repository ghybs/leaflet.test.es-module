import resolve from 'rollup-plugin-node-resolve';


export default {
  input: 'src/index',
  output: {
    file: 'dist/testPlugin.specific.umd-from-module.js',
    format: 'umd',
    intro: 'var umdMode = \'UMD-wrapped ES module\';', // Useful only to easily distinguish the JS file source in the rendered page.
    globals: { // Specify the global names under which the external resources will be available.
      'leaflet/src/control/Control': 'L', // `Control` class is directly available under `L` (as `L.Control`).
      'leaflet/src/dom/DomUtil': 'L.DomUtil', // Each function is available under the `L.DomUtil` namespace.
      'leaflet/src/map/Map': 'L' // `Map` class is directly available under `L` (as `L.Map). Unfortunately, this duplicates the first `L`.
    }
  },
  external: [ // Make sure these imports are not included in the rollup build, as the consumer will include them by other means.
    'leaflet/src/control/Control',
    'leaflet/src/dom/DomUtil',
    'leaflet/src/map/Map'
  ],
  treeshake: true,
  plugins: [
    resolve() // https://github.com/rollup/rollup-plugin-node-resolve
  ]
};
