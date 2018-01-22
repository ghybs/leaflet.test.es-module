/**
 * Created by boris on 7/17/17.
 */

// To be run with node.
var exec = require('child_process').exec;
var path = require('path');
var fs = require('fs');


// Retrieve build engine.
var buildEngine = process.argv[2];
var availableBuildEngines = ['rollup', 'webpack'];

if (typeof buildEngine !== 'string' || !availableBuildEngines.includes(buildEngine.toLowerCase())) {
  throw 'Please specify a build engine as 1st argument. Available engines: ' + availableBuildEngines;
}
buildEngine = buildEngine.toLowerCase();

// Retrieve source folder.
// https://nodejs.org/docs/latest/api/process.html#process_process_argv
var folderName = process.argv[3];

if (!folderName) {
  throw 'Please specify the folder path to build.';
}

// Retrieve configuration file name, if specified.
// https://rollupjs.org/#configuration-files
var configFile = process.argv[4] || null;

console.log('Executing ' + buildEngine + ' for folder: "' + folderName + '"');

var cmd = buildEngine + ' -c';

if (configFile) {
  cmd += ' ' + configFile;
} else {
  // Look for minify version of the default configuration file.
  var configMinify = buildEngine + '.minify.config.js';
  var path = path.join(folderName, configMinify);

  if (fs.existsSync(path)) {
    console.log('Found a minify version of the default configuration file, will execute it as well.');
    cmd += ' && ' + buildEngine + ' -c ' + configMinify;
  }
}

exec(cmd, {
  cwd: folderName
}, function(error, stdout, stderr) {
  if (error) {
    console.log('Error:');
    console.log(error);
    console.log(stderr);
    return;
  }

  console.log(stdout);
});
