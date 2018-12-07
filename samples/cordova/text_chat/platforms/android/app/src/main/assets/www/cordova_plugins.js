cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-websocket.websocket",
    "file": "plugins/cordova-plugin-websocket/www/websocket.js",
    "pluginId": "cordova-plugin-websocket",
    "clobbers": [
      "WebSocket"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-custom-config": "3.0.14",
  "cordova-plugin-console": "1.0.4",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-websocket": "0.12.0",
  "cordova-plugin-whitelist": "1.3.0"
};
// BOTTOM OF METADATA
});