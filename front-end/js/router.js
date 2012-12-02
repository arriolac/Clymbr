// Author: Chris Arriola <arriolac279@gmail.com>
// Filename: router.js
// Defines router for routing requests to the appropriate views.

define([
    'backbone',
    'views/LoginView'
], function(Backbone, LoginView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            "" : "login",
        },

        login: function() {
            new LoginView();
        },
    });

    var initialize = function() {
        var router = new AppRouter();
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
