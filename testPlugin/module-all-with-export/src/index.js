// This entry file is used to build a UMD-wrapped version of the plugin.
import {Control, control} from 'leaflet';
import {TestControl, default as testControl} from '../../module-all/src/testPlugin.all.module';

// Side effects: attach to `L` sub-namespaces as recommended in
// https://github.com/Leaflet/Leaflet/blob/master/PLUGIN-GUIDE.md#plugin-api
// (`L.Control` and `L.control` in this case)
Control.TestControl = TestControl;
control.testControl = testControl;

// This plugin does not try to attach directly to `L` namespace.
// Trying to do so seems hacky and would probably require to go through global.L,
// i.e. Leaflet would need to be loaded through its UMD version so that its side effect of
// creating global.L would take effect.
//     import L from 'leaflet';
//     L.test = 'foo'; // => undefined when the app is built through Rollup or webpack,
//                        but correct with Browserify since it loads the UMD version.

// Up to this point, there is nothing exported, only the above side effect.
// CommonJS & AMD: require('testPlugin');
// Global scope: <script src="testPlugin.all.umd-from-module.js"></script>
// Then:
//     L.control.testControl(options).addTo(map);
// …in all 3 cases.
//
// If we want to do:
//     var pluginTestControl = require('testPlugin');
//     pluginTestControl.testControl(options);
// …then we also need to export something, besides the previous side effect(s).
// Now Rollup in 'umd' format asks for `output.name`, which is used when the module is loaded in global scope
// (but not in CommonJS and AMD, therefore we still need to keep the previous side effect).
// We can either provide a dummy name (polluting some namespace), or be redundant and provide the main namespace
// that we already attach to in the previous side effect.
// Except that Rollup will attach everything to that namespace, whereas we want to attach to 2 different ones.
// E.g. if we provide `"name": "L.Control", we will get `L.Control.TestControl` (class) and `L.Control.testControl`
// (factory) in `L.Control` in the end, besides `L.control.testControl` (lower case first letter `control`).
export {TestControl, testControl};
