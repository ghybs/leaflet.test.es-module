// In this version, we directly import L to demonstrate that the side effects
// in Leaflet `index.js` files make app builds bigger.
// But the resulting UMD version is slightly simpler, since Rollup uses now
// only 1 global (`L`).
import {Control, DomUtil, Map} from 'leaflet';


// Based on http://leafletjs.com/examples/extending/extending-3-controls.html
export const TestControl = Control.extend({
  onAdd: function(map) {
    var div = DomUtil.create('div', 'leaflet-bar'),
        // Use `umdMode` if already defined in introduction.
        // This is just a mean to display how the plugin has been loaded
        // into the page.
        mode = typeof umdMode !== 'undefined' ? umdMode : 'ES module';

    div.classList.add('leaflet-bar');

    div.innerHTML = 'Test Plugin All Control (' + mode + ' version)';
    div.style.backgroundColor = 'white';
    div.style.padding = '5px';

    // Use `Map` somehow to have Rollup not tree-shake the import.
    console.log(Map);


    return div;
  },

  onRemove: function(map) {
    // Nothing to do here
  }
});


export default function testControl() {
  return new TestControl;
};
