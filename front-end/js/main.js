// Author: Chris Arriola <arriolac279@gmail.com>
// Filename: main.js
// Description: Sets up application.

require.config({
    paths: {
        jquery: 'libs/jquery-min',
        underscore: 'libs/underscore-min',
        templates: '../templates'
    }
});

require([
    // Load application module and pass it to definition function
    'app',
], function(App) {
    App.initialize();
});
