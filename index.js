var pb = require('../pi-beard/src/app');
var config = require('yaml-config');
var settings = config.readConfig('./settings.yml');

// Initialize some defaults.
if (!settings.key) {
  // Let's use default config. Hope you are in debug mode, sir!
  settings = config.readConfig('./default.settings.yml');
}
settings.auth = settings.key;

// Add an interval callback.
settings.repeat = function() {
  client.send('temp', 'snuten' + Math.random());
};

var client = pb.start(settings);
