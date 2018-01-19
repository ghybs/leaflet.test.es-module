/**
 * Created by boris on 7/17/17.
 */

// To be run with node.
var exec = require('child_process').exec;


// Retrieve source folder.
// https://nodejs.org/docs/latest/api/process.html#process_process_argv
var folderName = process.argv[2] || 'testApp/rollup/all';

// Retrieve configuration file name, if specified.
// https://rollupjs.org/#configuration-files
var configFile = process.argv[3] || null;

console.log('Executing Rollup for folder: "' + folderName + '"');

var cmd = 'rollup -c';

if (configFile) {
  cmd += ' ' + configFile;
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
