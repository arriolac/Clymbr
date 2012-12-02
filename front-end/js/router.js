// Author: Chris Arriola <arriolac279@gmail.com>
// Filename: router.js
// Defines router for routing requests to the appropriate views.

define([
    'backbone',
    'views/LoginView',
    'views/profile/ProfileEditView'
], function(Backbone, LoginView, ProfileEditView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            "profile": "profileEdit", // TODO: not the right URL, will have to change
            "" : "login"
        },

        profileEdit: function() {
            new ProfileEditView();
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
