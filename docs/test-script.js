var mymap = L.map('mymap'),
    parisLatLng = [48.86, 2.34];

L.control.testControl().addTo(mymap);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// Use a marker to make sure the default icon image path detection works…
L.marker(parisLatLng).addTo(mymap);

mymap.setView(parisLatLng, 12);

document.getElementById('leaflet-version').innerHTML = L.version;
document.getElementById('testPlugin-version').innerHTML = '(see in the top right map control)';
document.getElementById('testApp-version').innerHTML = 'Standalone script';
