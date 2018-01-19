# Test for ES modules with Leaflet

This repo is a demonstration of consuming Leaflet directly as an ES module.

It also includes a Test Plugin that can be built with Rollup (like Leaflet)
or consumed as an ES module directly as well.

I take the opportunity to test different configurations, in particular:
- importing the entire Leaflet module (`import * as L from 'leaflet'`)
and letting Tree Shaking trying to slim down the resulting bundle
(hint: this highlights the bad time it has, due to all side effects in Leaflet `index.js` files)
- importing only the necessary bits ("manual" Tree Shaking).
This shows that we have to manually extra inner modules for their side effects (typically: map handlers, controls)


## Demo

Simply open the `docs/test-page.html` page.

Then you can select at the bottom of the page which version to test:
- Either Leaflet + Test Plugin (as global or one of the UMD-wrapped versions)
- Or a built version

## Build the Test Plugin

This bundles the Test Plugin in a UMD wrapped version for direct browser consumption.

- `npm run build:plugin`: builds the 2 below versions of the Test Plugin.
- `npm run build:plugin-all`: builds (src + minified) the version which imports the entire Leaflet module.
Result is slim.
- `npm run build:plugin-specific`: builds (src + minified) the version which imports only the necessary inner Leaflet modules.
Result is slightly bigger than previous, because Rollup treats each inner module as a different package.


## Built the Test App

This bundles the Test Application with all its dependencies (i.e. Leaflet and the Test Plugin) in an IIFE-wrapped version for direct browser consumption.

- `npm run build:rollup`: builds the 3 below versions of the Test App with Rollup.
- `npm run build:rollup-all`: builds (src + minified) the version which imports the entire Leaflet module, and the module-all version of the Test Plugin.
- `npm run build:rollup-specific`: builds (src + minified) the version which imports only the necessary inner Leaflet modules
(+ a few extra for side effects, namely map handlers, zoom and attribution controls)
and the module-specific version of the Test Plugin. Result is much slimmer than the previous one (minified 83 kB instead of 133 kB).
- `npm run build:rollup-specific-plugin-all`: builds (src + minified) the version which imports only the necessary inner Leaflet modules
like the previous one, but the module-all version of the Test Plugin. Result is almost as big as the "all" version,
because the Test Plugin makes the entire Leaflet module be imported anyway, with little room for Tree Shaking because of side effects.

## Manual build

Use command `npm run build -- <folder>`

See the below list of available folders.

## Plugin build process

Inspired from: https://bost.ocks.org/mike/d3-plugin/

Like D3, we would therefore encourage using [Rollup](https://rollupjs.org/) to
build Leaflet plugins from modules into UMD-wrapped version, for non-ES6
consumption.

This would be consistent with the core Leaflet, which already uses Rollup.
