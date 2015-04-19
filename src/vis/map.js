define(function(require) {
  var d3 = require("d3");
  var queue = require("queue");
  var topojson = require("topojson");

  var map = function() {
    var height = 600;
    var width = 800;

    var projection = d3.geo.albers()
      .scale(width / 0.7)
      .translate([width / 2, height / 2]);

    var path = d3.geo.path()
      .projection(projection);

    var graticule = d3.geo.graticule();
    console.log(graticule.extent());
    graticule.extent([[-180,-80],[180,80]]);
    graticule.step([2,2]);
    console.log(graticule.extent());

    var data = [];
    var svg = null;
    var g = null;


    var margins = {top:20, left:20, bottom:20, right:20};

    var chart = function(selection) {
      selection.each(function(rawData) {
        svg = d3.select(this).selectAll("svg").data([data]);
        svg.enter().append("svg");

        // var defs = svg.append("defs");


        svg.append("g");

        svg.attr("width", width + margins.left + margins.right);
        svg.attr("height", height + margins.top + margins.bottom);

        // padding doesn't add to svg size, but does move
        // outer group over
        g = svg.select("g")
          .attr("transform", "translate(" + margins.left + "," + margins.top + ")");

        queue()
          .defer(d3.json, "assets/data/us.json")
          .defer(d3.json, "assets/data/na_no_us.json")
          .await(show);


      });
    };

    function show(error, us, world) {
      console.log(error);
      var states = topojson.mesh(us, us.objects.states, function(a, b) {
          // return a.id !== b.id;
        return true;
        });

      g.append("g")
        .attr("class", "counties")
        .selectAll("path")
         .data(topojson.feature(us, us.objects.counties).features)
         .enter()
         .append("path")
         .attr("id", function(d) {
           return d.id;
         })
         .attr("d", path);


      g.append("path")
        .datum(states)
        .attr("class", "states")
        .attr("d", path);

      g.append("path")
        .datum(topojson.mesh(world, world.objects.countries))
        .attr("class", "states")
        .attr("d", path);

      g.append("path")
        .datum(graticule)
        .attr("class", "graticule")
        .attr("d", path);
    }


    return chart;
  };

  return map;
});
