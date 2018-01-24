import path from 'path';
//import resolve from 'rollup-plugin-node-resolve'; // If all 3rd party libs are flagged as external, there is no need for this plugin.
import uglify from 'rollup-plugin-uglify';
import {minify} from 'uglify-es';
import {argv} from 'yargs'; // Since we use a single config file for different plugin versions, we need to retrieve the "umdMode" for intro. This should be unnecessary in a normal plugin configuration.


const pluginFolder = process.cwd(); // The directory from which the script was called, i.e. the plugin folder.
const pkg = require(path.resolve(pluginFolder, 'package.json'));
const inputName = path.resolve(pluginFolder, 'src', 'index');
const outputName = path.resolve(pluginFolder, pkg.main);
const intro = 'var umdMode = \'' + argv['umdMode'] + '\';'; // Useful only to easily distinguish the JS file source in the rendered page. This should be unnecessary in a normal plugin configuration.

const sourceConfig = {
  input: inputName,
  output: {
    file: outputName + '.js',
    format: 'umd',
    intro: intro,
    globals: { // Specify the global names under which the external resources will be available.
      // For Module-all and Module-all-with-export.
      'leaflet': 'L',

      // For Module-specific.
      'leaflet/src/control/Control': 'L', // `Control` class is directly available under `L` (as `L.Control`).
      'leaflet/src/dom/DomUtil': 'L.DomUtil', // Each function is available under the `L.DomUtil` namespace.
      'leaflet/src/map/Map': 'L' // `Map` class is directly available under `L` (as `L.Map). Unfortunately, this duplicates the first `L`.
    },

    // For Module-all-with-export
    name: 'L.Control', // When loaded directly in the browser, the exports will be attached to that namespace => slightly redundant with the manual attachments (side effect), or we could also specify a dummy namespace.
    extend: true // Normally the default value, but make sure we do not erase what we specified in "output.name" field.
  },
  external: [ // Make sure these imports are not included in the rollup build, as the consumer will include them by other means.
    // For Module-all and Module-all-with-export.
    'leaflet',

    // For Module-specific.
    'leaflet/src/control/Control',
    'leaflet/src/dom/DomUtil',
    'leaflet/src/map/Map'
  ],
  treeshake: true,
  plugins: [
    //resolve() // https://github.com/rollup/rollup-plugin-node-resolve
  ]
};

// We could also directly minify the source output, just duplicating here for simplicity.
const minifiedConfig = {
  input: inputName,
  output: {
    file: outputName + '.min.js',
    format: 'umd',
    intro: intro,
    globals: { // Specify the global names under which the external resources will be available.
      // For Module-all and Module-all-with-export.
      'leaflet': 'L',

      // For Module-specific.
      'leaflet/src/control/Control': 'L', // `Control` class is directly available under `L` (as `L.Control`).
      'leaflet/src/dom/DomUtil': 'L.DomUtil', // Each function is available under the `L.DomUtil` namespace.
      'leaflet/src/map/Map': 'L' // `Map` class is directly available under `L` (as `L.Map). Unfortunately, this duplicates the first `L`.
    },

    // For Module-all-with-export
    name: 'L.Control', // When loaded directly in the browser, the exports will be attached to that namespace => slightly redundant with the manual attachments (side effect), or we could also specify a dummy namespace.
    extend: true // Normally the default value, but make sure we do not erase what we specified in "output.name" field.
  },
  external: [ // Make sure these imports are not included in the rollup build, as the consumer will include them by other means.
    // For Module-all and Module-all-with-export.
    'leaflet',

    // For Module-specific.
    'leaflet/src/control/Control',
    'leaflet/src/dom/DomUtil',
    'leaflet/src/map/Map'
  ],
  treeshake: true,
  plugins: [
    //resolve(), // https://github.com/rollup/rollup-plugin-node-resolve
    uglify({}, minify) // https://github.com/TrySound/rollup-plugin-uglify
  ]
};


export default [
  sourceConfig,
  minifiedConfig
];
