import {map as createMap} from 'leaflet/src/map'; // Load map/index.js so that it includes handlers (side effect).
//import {createMap} from 'leaflet/src/map/Map';
import {tileLayer as createTileLayer} from 'leaflet/src/layer/tile/TileLayer';
import {marker as createMarker} from 'leaflet/src/layer/marker/Marker';
import {version as leafletVersion} from 'leaflet/package.json'; // Rollup and webpack2+ can read JSON files as well.
import 'leaflet/src/control/Control.Attribution'; // Side effect: have Map include an attribution control by default.
import 'leaflet/src/control/Control.Zoom'; // Side effect: have Map include a zoom control by default
import '../../testPlugin/module-specific/dist/testPlugin.specific.umd-from-module';
import {control} from 'leaflet/src/control/Control'; // The plugin does not export anything, so we have to use its side effect of attaching to Control/control.

var mymap = createMap('mymap'),
    parisLatLng = [48.86, 2.34];

control.testControl().addTo(mymap); // Use the Test Plugin side effect.

createTileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// Use a marker to make sure the default icon image path detection works…
createMarker(parisLatLng).addTo(mymap);

mymap.setView(parisLatLng, 12);

// Here we have loaded Leaflet version from its package.json, but directly within the app code.
// In this app version, we use Rollup build engine, which can load JSON files.
document.getElementById('leaflet-version').innerHTML = leafletVersion + ' (bundled with the app)';
document.getElementById('testPlugin-version').innerHTML = '(see in the top right map control)';
document.getElementById('testApp-version').innerHTML = '(Rollup or webpack) with specific Leaflet inner modules';
