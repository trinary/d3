var vows = require("vows"),
    load = require("../load"),
    assert = require("../assert");

var suite = vows.describe("d3.svg.chord");

suite.addBatch({
  "chord": {
    topic: load("svg/chord").expression("d3.svg.chord"),

    "source defaults to a function accessor": function(chord) {
      var c = chord().target({x:5, y:5}).radius(5).startAngle(0).endAngle(30);
      assert.pathEqual(c({source: {x:1, y:1}}),"M0,-5A5,5 0 1,1 -4.940158,-0.771257Q 0,0 0,-5Z");
      assert.pathEqual(c({source: {x:10, y:10}}),"");
    },
  }
});

suite.export(module);
