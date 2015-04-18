// Shared require config regardless of platform. See main.js for requiring
// platform specific configuration.

require.config({
  baseUrl: "/",

  paths: {
    jquery: "lib/jquery/dist/jquery",
    backbone: "lib/backbone/backbone",
    underscore: "lib/lodash/dist/lodash.underscore",
    lodash: "lib/lodash/dist/lodash",
    tmpl: "lib/lodash-template-loader/loader",
    d3: "lib/d3/d3",
    queue: "lib/queue-async/queue",
    topojson: "lib/topojson/topojson",
    bluebird: "lib/bluebird/js/browser/bluebird"
  },

  deps: ["main"]
});
