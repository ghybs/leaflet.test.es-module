// This entry file is used to build a UMD-wrapped version of the plugin.
import {Control, control} from 'leaflet';
import {TestControl, default as testControl} from './testPlugin.all.module';

// Side effects: attach to `L` sub-namespaces as recommended in
// https://github.com/Leaflet/Leaflet/blob/master/PLUGIN-GUIDE.md#plugin-api
// (`L.Control` and `L.control` in this case)
Control.TestControl = TestControl;
control.testControl = testControl;

// This plugin does not try to attach directly to L namespace.
