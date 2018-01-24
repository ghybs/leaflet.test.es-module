import * as L from 'leaflet';
import createTestControl from '../../testPlugin/module-specific'; // Could be any arbitrary name (not necessarily "createTestControl").

var mymap = L.map('mymap'),
    parisLatLng = [48.86, 2.34];

createTestControl().addTo(mymap);

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
