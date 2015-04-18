define(function(require) {
  var d3 = require("d3");
  var queue = require("queue");
  var topojson = require("topojson");

  var map = function() {
    var height = 600;
    var width = 800;

    var projection = d3.geo.albersUsa()
      .scale(width / 0.75)
      .translate([width / 2, height / 2]);

    var path = d3.geo.path()
      .projection(projection);

    var data = [];
    var svg = null;
    // main group to render in
    var g = null;


    var margins = {top:20, left:10, bottom:20, right:10};

    var chart = function(selection) {
      selection.each(function(rawData) {
        svg = d3.select(this).selectAll("svg").data([data]);
        svg.enter().append("svg");
        svg.append("g");

        svg.attr("width", width + margins.left + margins.right);
        svg.attr("height", height + margins.top + margins.bottom);

        // padding doesn't add to svg size, but does move
        // outer group over
        g = svg.select("g")
          .attr("transform", "translate(" + margins.left + "," + margins.top + ")");

        queue()
          .defer(d3.json, "assets/data/us-counties.json")
          .await(show);

        show();

      });
    };

    function show() {
      g.append("text")
        .text("hello");
      g.append("g")
        .attr("class", "counties")
        .selectAll("path")
        .data(topojson.feature(us, us.objects.counties).features)
        .enter()
        .append("path")
        .attr("id", function(d) {
          return d.id + " " + countyId[d.id];
        })
        .attr("d", path)
    }


    return chart;
  };

  return map;
});
