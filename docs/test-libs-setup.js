var cdn = 'https://unpkg.com/';
var versionPlaceholder = '@{{VERSION}}/';

var leafletPathPrefix = cdn + 'leaflet' + versionPlaceholder + 'dist/';


// To be executed after manage-libs-versions is ready.
// https://github.com/ghybs/manage-libs-versions
// https://www.npmjs.com/package/manage-libs-versions
var bundle1 = new manageLibsVersions.Bundle({
	name: 'bundle1',
	libs: [{
		name: 'leaflet',
		mandatory: true,
		versions: [
			{
				name: 'master',
				assets: [{
					type: 'stylesheet',
					path: 'https://leafletjs-cdn.s3.amazonaws.com/content/build/master/leaflet.css'
				}, {
					type: 'script',
					path: 'https://leafletjs-cdn.s3.amazonaws.com/content/build/master/leaflet-src.js'
				}]
			},
      _makeLeafletVersionAssets({
        name: '1.3.1',
        defaultVersion: true,
        sriCss: 'sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ==',
        sriSrcJs: 'sha512-IkGU/uDhB9u9F8k+2OsA6XXoowIhOuQL1NTgNZHY1nkURnqEGlDZq3GsfmdJdKFe1k1zOc6YU2K7qY+hF9AodA=='
      }),
      _makeLeafletVersionAssets({
        name: '1.3.0',
        sriCss: 'sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ==',
        sriSrcJs: 'sha512-2h9aokfcaYW7k0VPn1JqbQDQCaNQRrZJwetlnQ88yJrtIzGLVW/2StdQKoE+TIVNNTUxf6SVa+2vW2KB2EXnnA=='
      }),
			_makeLeafletVersionAssets({
				name: '1.2.0',
				sriCss: 'sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ==',
				sriSrcJs: 'sha512-YLT+I34kEPlk5OqR5XObf40B7sInrIU+bGe5VcwSpfR5OrFVjExFxfhVoJQEPZQWMyB53o3AU/bb5J91nc8CPA=='
			}),
			_makeLeafletVersionAssets({
				name: '1.1.0',
				sriCss: 'sha512-wcw6ts8Anuw10Mzh9Ytw4pylW8+NAD4ch3lqm9lzAsTxg0GFeJgoAtxuCLREZSC5lUXdVyo/7yfsqFjQ4S+aKw==',
				sriSrcJs: 'sha512-sIPSXEX730B6EcdQyVPmIGp7f7ZrxIuECnkwYtPpEltG6NqOVtmBNoxHkMamNsAOHLMnDFaUoJYA4PWtzNZDuA=='
			}),
			_makeLeafletVersionAssets({
				name: '1.0.3',
				sriCss: 'sha512-07I2e+7D8p6he1SIM+1twR5TIrhUQn9+I6yjqD53JQjFiMf8EtC93ty0/5vJTZGF8aAocvHYNEDJajGdNx1IsQ==',
				sriSrcJs: 'sha512-WXoSHqw/t26DszhdMhOXOkI7qCiv5QWXhH9R7CgvgZMHz1ImlkVQ3uNsiQKu5wwbbxtPzFXd1hK4tzno2VqhpA=='
			}),
			_makeLeafletVersionAssets({
				name: '1.0.2',
				sriCss: 'sha384-UWNncEeCHTwoCP7ET6ZTVSPNXkKL7EWioe9by1pCm4Nu7nF9hR+tOaQzYSKp2dWN',
				sriSrcJs: 'sha384-KNLak5IVC1MuCvuK2/vsXntDe3JNjiQVrRbeoCBUtLnSRbQgcPbTepID1g8Llk9Y'
			}),
			_makeLeafletVersionAssets({
				name: '1.0.1',
				sriCss: 'sha384-jbhYDFfm+l6mA6jJUD5X/yv7LoRqVSoV/P77fNwITqMNlHHVIdSwj3SexyasxFL/',
				sriSrcJs: 'sha384-ObOe0J9dj8lQbJA8Pq3nwRiDPV58lDWqCJ/gLn2KPrUefv5P427o9ph0I4zyWWyu'
			}),
			_makeLeafletVersionAssets({
				name: '1.0.0',
				sriCss: 'sha384-eEKCX4qfm6OKwQ/hvjr7cRoBNXSQuFQoaiS7sXxD1x5Fmus85DkG7OTFoU6eI3FV',
				sriSrcJs: 'sha384-l/IzbI3svpXQy9ek7BrZfibt+dygUKc6XwMFKuvoCCGcwL+3GKNzMbF920axFAUy'
			}),
			_makeLeafletVersionAssets({
				name: '0.7.7',
				sriCss: 'sha384-99ZJFcuBCh9c/V/+8YwDX/TUGG8JWMG+gKFJWzk0BZP3IoDMN+pLGd3/H0yjg4oa',
				sriSrcJs: 'sha384-AoPn7rJ3h17Ohw5HQ0Y6dQ/PwJxk6tIU61Hn0B7So8NGej/J1YCA9R4eehsfCid7'
			})
		]
	}, {
		name: 'testPlugin',
		mandatory: true,
		versions: [
      {
        name: 'global',
        defaultVersion: true,
        assets: [{
          type: 'script',
          path: '../testPlugin/global/testPlugin.global.js'
        }]
      },
      {
        name: 'specific-UMD-from-module',
        disabled: true, // Will be enabled if assets are found to be available at runtime.
        assets: [{
          type: 'script',
          path: '../testPlugin/module-specific/dist/testPlugin.specific.umd-from-module.js'
        }]
      },
      {
        name: 'all-UMD-from-module',
        disabled: true, // Will be enabled if assets are found to be available at runtime.
        assets: [{
          type: 'script',
          path: '../testPlugin/module-all/dist/testPlugin.all.umd-from-module.js'
        }]
      }
		]
	}]
});

// Add Full App scripts within "Leaflet" library (even though it is more than just Leaflet).
// Listed here so that they are in the same radio group and are mutually exclusive with Leaflet.
var fullAppSpecs = [{
  name: 'Browserify-all',
  assets: [{
    type: 'script',
    path: '../testApp/dist/testApp.browserify.all.js'
  }]
}, {
  name: 'Browserify-all-plugin-with-export',
  assets: [{
    type: 'script',
    path: '../testApp/dist/testApp.browserify.all-plugin-with-export.js'
  }]
}, {
  name: 'Rollup-all',
  assets: [{
    type: 'script',
    path: '../testApp/dist/testApp.rollup.all.js'
  }]
}, {
  name: 'Rollup-all-plugin-specific',
  assets: [{
    type: 'script',
    path: '../testApp/dist/testApp.rollup.all-plugin-specific.js'
  }]
}, {
  name: 'Rollup-all-plugin-all-umd',
  assets: [{
    type: 'script',
    path: '../testApp/dist/testApp.rollup.all-plugin-all-umd.js'
  }]
}, {
  name: 'Rollup-all-plugin-specific-umd',
  assets: [{
    type: 'script',
    path: '../testApp/dist/testApp.rollup.all-plugin-specific-umd.js'
  }]
}, {
  name: 'Rollup-specific',
  assets: [{
    type: 'script',
    path: '../testApp/dist/testApp.rollup.specific.js'
  }]
}, {
  name: 'Rollup-specific-plugin-all',
  assets: [{
    type: 'script',
    path: '../testApp/dist/testApp.rollup.specific-plugin-all.js'
  }]
}, {
  name: 'Rollup-specific-plugin-all-umd',
  assets: [{
    type: 'script',
    path: '../testApp/dist/testApp.rollup.specific-plugin-all-umd.js'
  }]
}, {
  name: 'Rollup-specific-plugin-specific-umd',
  assets: [{
    type: 'script',
    path: '../testApp/dist/testApp.rollup.specific-plugin-specific-umd.js'
  }]
}, {
  name: 'webpack-all',
  assets: [{
    type: 'script',
    path: '../testApp/dist/testApp.webpack.all.js'
  }]
}, {
  name: 'webpack-all-plugin-specific',
  assets: [{
    type: 'script',
    path: '../testApp/dist/testApp.webpack.all-plugin-specific.js'
  }]
}, {
  name: 'webpack-all-plugin-all-umd',
  assets: [{
    type: 'script',
    path: '../testApp/dist/testApp.webpack.all-plugin-all-umd.js'
  }]
}, {
  name: 'webpack-all-plugin-specific-umd',
  assets: [{
    type: 'script',
    path: '../testApp/dist/testApp.webpack.all-plugin-specific-umd.js'
  }]
}, {
  name: 'webpack-specific',
  assets: [{
    type: 'script',
    path: '../testApp/dist/testApp.webpack.specific.js'
  }]
}, {
  name: 'webpack-specific-plugin-all',
  assets: [{
    type: 'script',
    path: '../testApp/dist/testApp.webpack.specific-plugin-all.js'
  }]
}, {
  name: 'webpack-specific-plugin-all-umd',
      assets: [{
    type: 'script',
    path: '../testApp/dist/testApp.webpack.specific-plugin-all-umd.js'
  }]
}, {
  name: 'webpack-specific-plugin-specific-umd',
  assets: [{
    type: 'script',
    path: '../testApp/dist/testApp.webpack.specific-plugin-specific-umd.js'
  }]
}];

var leafletLib = bundle1.getLib('leaflet');

fullAppSpecs.forEach(function (fullAppSpec) {
  fullAppSpec.disabled = true;
  fullAppSpec.assets.push({
    type: 'stylesheet',
    path: 'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css'
  });
  leafletLib.addVersion(fullAppSpec);
});


function _makeLeafletVersionAssets(options) {
	var versionName = options.name;

	return {
		name: versionName,
		defaultVersion: options.defaultVersion,
		assets: [
			manageLibsVersions.makeStylesheet(leafletPathPrefix + 'leaflet.css', versionName, options.sriCss),
			manageLibsVersions.makeScript(leafletPathPrefix + 'leaflet-src.js', versionName, options.sriSrcJs)
		]
	};
}
