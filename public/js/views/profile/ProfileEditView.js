// Author: Chris Arriola <arriolac279@gmail.com>
// Filename: ProfileEditView.js
// Editting a users profile.

define([
    'jquery',
    'backbone',
    'text!templates/profileEditTemplate.html'
], function($, Backbone, profileEditTemplate) {
    var ProfileEditView = Backbone.View.extend({
        events: {
            "submit form#profile-edit-form": "edit"
        }, 

        el: ".content",

        initialize: function() {
            this.render();
        }, 

        render: function() {
            this.$el.html(profileEditTemplate);
            this.delegateEvents();
        },

        logIn: function(e) {
            // TODO: after the casal builds
            console.log("profile-edit");
        },
    });

    return ProfileEditView;
});
