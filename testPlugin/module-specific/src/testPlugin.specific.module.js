// Better to link the exact file where the export is first defined,
// in order to avoid unnecessary exports not tree-shakable by Rollup
// due to Leaflet having side effects in `index.js` files
// (i.e. building sub-namespaces, etc.)
// However, the drawback is that Rollup treats them as different globals,
// whereas most of the time they are available under `L` namespace directly
// (you can see in the built file several arguments, all being `global.L`)
import {Control} from 'leaflet/src/control/Control';
import {create} from 'leaflet/src/dom/DomUtil';
import {Map} from 'leaflet/src/map/Map';


// Based on http://leafletjs.com/examples/extending/extending-3-controls.html
export const TestControl = Control.extend({
  onAdd: function(map) {
    var div = create('div', 'leaflet-bar'),
        // Use `umdMode` if already defined in introduction.
        // This is just a mean to display how the plugin has been loaded
        // into the page.
        mode = typeof umdMode !== 'undefined' ? umdMode : 'ES module';

    div.classList.add('leaflet-bar');

    div.innerHTML = 'Test Plugin Specific Control (' + mode + ' version)';
    div.style.backgroundColor = 'white';
    div.style.padding = '5px';

    // Use `Map` somehow to have Rollup not tree-shake the import.
    // Just to demonstrate that trying to avoid Leaflet `index.js` side effects
    // has the drawback of having Rollup treat each direct `src` import as a
    // different global.
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
