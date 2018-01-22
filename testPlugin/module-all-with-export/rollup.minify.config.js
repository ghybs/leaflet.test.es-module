import uglify from 'rollup-plugin-uglify';
import {minify} from 'uglify-es';
import configuration from './rollup.config';


// Perform the same build, but different output.
configuration.output.file = 'dist/testPlugin.all-with-export.umd-from-module.min.js';

// Minify the output.
// https://github.com/TrySound/rollup-plugin-uglify
configuration.plugins.push(uglify({}, minify));

export default configuration;