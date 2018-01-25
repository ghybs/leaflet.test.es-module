import {createMap} from 'leaflet/src/map/Map';
import {tileLayer as createTileLayer} from 'leaflet/src/layer/tile/TileLayer';
import {marker as createMarker} from 'leaflet/src/layer/marker/Marker';
import {version as leafletVersion} from 'leaflet/package.json'; // Rollup and webpack2+ can read JSON files as well.
// No need to import other Leaflet components for side effect.
// Since we import the all version of the plugin, all Leaflet will be imported and all side effects will occur.
import '../../testPlugin/module-all/dist/testPlugin.all.umd-from-module';
import * as L from 'leaflet';

var mymap = createMap('mymap'),
    parisLatLng = [48.86, 2.34];

L.control.testControl().addTo(mymap); // Use the Test Plugin side effect.

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
