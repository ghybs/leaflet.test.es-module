// Browserify currently does not uses the import/export ES2015 syntax,
// so we have to stick with CommonJS / Node's require.
// This also means that it consumes the UMD version of the library (as specified in "main" or "browser" field of
// `package.json`) instead of the ES modules directly.
// Therefore this script mainly tests that the UMD versions of Leaflet and of the Test Plugin work as intended when
// loaded through CommonJS instead of directly in the browser.
// Caution: manually copy `leaflet-src.js` file into `node_modules/leaflet/dist/` folder before building,
// because it is not committed in git.
var L = require('leaflet');

// If the plugin build has been configured to export something, we can use it here.
var pluginTestControl = require('../../../testPlugin/module-all');
// Otherwise, simply require the plugin to have it perform its side effect(s).
// require('../../../testPlugin/module-all');

var mymap = L.map('mymap'),
    parisLatLng = [48.86, 2.34];

// Using the plugin export, if provided.
pluginTestControl.testControl().addTo(mymap);

// Using the plugin side effect.
L.control.testControl({
  position: 'bottomleft'
}).addTo(mymap);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// Use a marker to make sure the default icon image path detection works…
L.marker(parisLatLng).addTo(mymap);

mymap.setView(parisLatLng, 12);

// L.version is currently missing, because it is added in Leaflet.js, which we bypass by importing directly index.js
// Having version from package.json in module would require the app to use a build engine that can import JSON files.
// If the app also uses Rollup, then no problem, but it is far from guaranteed for other build engines.
document.getElementById('leaflet-version').innerHTML = L.version + ' (bundled with the app)';
document.getElementById('testPlugin-version').innerHTML = '(see in the top right map control)';
document.getElementById('testApp-version').innerHTML = '(Rollup or webpack) with all Leaflet';
