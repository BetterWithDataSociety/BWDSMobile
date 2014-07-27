cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.red_folder.phonegap.plugin.backgroundservice/www/backgroundservice.js",
        "id": "com.red_folder.phonegap.plugin.backgroundservice.BackgroundService",
        "clobbers": [
            "window.plugins.BackgroundServices"
        ]
    },
    {
        "file": "plugins/org.transistorsoft.cordova.background-geolocation/www/BackgroundGeoLocation.js",
        "id": "org.transistorsoft.cordova.background-geolocation.BackgroundGeoLocation",
        "clobbers": [
            "plugins.backgroundGeoLocation"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.red_folder.phonegap.plugin.backgroundservice": "3.3",
    "org.transistorsoft.cordova.background-geolocation": "0.3.0",
    "org.apache.cordova.geolocation": "0.3.8"
}
// BOTTOM OF METADATA
});