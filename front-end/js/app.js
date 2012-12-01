// Author: Chris Arriola <arriolac279@gmail.com>
// Filename: app.js

define([
   'router'
], function(Router) {
    var initialize = function() {
        Router.initialize();
    };

    return {
        initialize: initialize,
    };
});
