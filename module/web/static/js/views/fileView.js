define(['jquery', 'backbone', 'underscore'], function($, Backbone, _) {

    // Renders single file item
    return Backbone.View.extend({

        tagName: 'li',
        className: 'file-view',
//        template: _.template($("#template-file").html()),
        template: _.compile($("#template-file").html()),
        events: {

        },

        initialize: function() {
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });
});