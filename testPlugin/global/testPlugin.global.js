// Very simple version of testPlugin which assumes L for Leaflet is
// already globally available.
// Simulates a plugin without any wrapper, or could be wrapped by a simple IIFE (not UMD).

// Based on http://leafletjs.com/examples/extending/extending-3-controls.html
L.Control.TestControl = L.Control.extend({
  onAdd: function(map) {
    var div = L.DomUtil.create('div', 'leaflet-bar');

    div.classList.add('leaflet-bar');

    div.innerHTML = 'Test Plugin Control (global version)';
    div.style.backgroundColor = 'white';
    div.style.padding = '5px';


    return div;
  },

  onRemove: function(map) {
    // Nothing to do here
  }
});


L.control.testControl = function testControl() {
  return new L.Control.TestControl;
};
