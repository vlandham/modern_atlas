define(function(require) {
  var View = require("../core/view");
  var d3 = require("d3");
  var map = require("./map");


  var template = require("tmpl!../vis/map-view");

  return View.extend({
    template: template,
    initialize: function(options) {
    },
    _render: function() {
      var self = this;
      this.$el.html(this.template());
      var vis = d3.select(self.$el.find('.map')[0]);
      vis.datum([])
        .call(map());

      return this;
    }
  });

});

