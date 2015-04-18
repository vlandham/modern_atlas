define(function(require) {

  var View = require('../core/view');
  var Map = require('../vis/map-view');

  var template = require('tmpl!../core/layout');

  return View.extend({
    template: template,

    initialize: function() {
    },


    _render: function() {
      // var self = this;
      this.$el.html(this.template());
      this.contentElement = this.$el.find(this.contentElement);


      var map = new Map({
        el : this.$el.find('.map')
      });

      map.render();


      return this;
    }

  });

});
