// Author: Chris Arriola <arriolac279@gmail.com>
// Filename: LogInView.js

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/logInTemplate.html'
], function($, _, Backbone, logInTemplate) {
    var LogInView = Backbone.View.extend({
        events: {
            "submit form.login-form": "logIn",
            "submit form.signup-form": "signUp"
        },

        el: ".content",

        initialize: function() {
            //_.bindAll(this, "logIn", "signUp");
            this.render();
        },

        render: function() {
            this.$el.html(logInTemplate);
            this.delegateEvents();
        },

        logIn: function(e) {
            // TODO: after the casal builds
        },

        signUp: function(e) {
            // TODO: after the casal builds
        }
    });

    return LogInView;
});
