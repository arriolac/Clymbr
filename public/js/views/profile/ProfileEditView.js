// Author: Chris Arriola <arriolac279@gmail.com>
// Filename: ProfileEditView.js
// Editting a users profile.

define([
    'jquery',
    'backbone',
    'text!templates/profileEditTemplate.html'
], function($, Backbone, profileEditTemplate) {

    var ENTER_KEY_CODE = 13;

    var ProfileEditView = Backbone.View.extend({
        events: {
            "submit form#profile-edit-form": "save",
            "keypress #new-climbing-locations": "createLocationOnEnter"
        }, 

        el: ".content",

        initialize: function() {
            this.render();
        }, 

        render: function() {
            this.$el.html(profileEditTemplate);
            this.delegateEvents();
        },

        //
        // Events
        //
        save: function(e) {
            // TODO: after the casal builds
            console.log("profile-edit");
        },

        createLocationOnEnter: function(e) {

            if (e.keyCode != ENTER_KEY_CODE) return;

            this.input.val(''); 
            console.log("blah blah blah");
        }
    });

    return ProfileEditView;
});
