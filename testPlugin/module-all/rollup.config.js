import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import {minify} from 'uglify-es';


const outputName = 'testPlugin.all.umd-from-module';
const umdMode = 'UMD-wrapped ES module';

const sourceConfig = {
  input: 'src/index',
  output: {
    file: 'dist/' + outputName + '.js',
    format: 'umd',
    intro: 'var umdMode = \'' + umdMode + '\';', // Useful only to easily distinguish the JS file source in the rendered page.
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

// We could also directly minify the source output, just duplicating here for simplicity.
const minifiedConfig = {
  input: 'src/index',
  output: {
    file: 'dist/' + outputName + '.min.js',
    format: 'umd',
    intro: 'var umdMode = \'' + umdMode + '\';', // Useful only to easily distinguish the JS file source in the rendered page.
    globals: { // Specify the global names under which the external resources will be available.
      'leaflet': 'L'
    }
  },
  external: [ // Make sure these imports are not included in the rollup build, as the consumer will include them by other means.
    'leaflet'
  ],
  treeshake: true,
  plugins: [
    resolve(), // https://github.com/rollup/rollup-plugin-node-resolve
    uglify({}, minify) // https://github.com/TrySound/rollup-plugin-uglify
  ]
};


export default [
  sourceConfig,
  minifiedConfig
];
