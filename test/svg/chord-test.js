var vows = require("vows"),
    load = require("../load"),
    assert = require("../assert");

var suite = vows.describe("d3.svg.chord");

suite.addBatch({
  "chord": {
    topic: load("svg/chord").expression("d3.svg.chord"),

    "source defaults to a function accessor": function(chord) {
      var c = chord().radius(5).startAngle(0).endAngle(30);
      assert.pathEqual(c({source: {endAngle: 20, startAngle: 60}}),"M0,-5A5,5 0 1,1 -4.940158,-0.771257Q 0,0 0,-5Z");
    },
    "source can be defined as a constant": function(chord) {
      var c = chord().target({startAngle: 60, endAngle: 20}).radius(5).startAngle(0).endAngle(180);
      assert.pathEqual(c.source({endAngle: 20, startAngle: 60})(),"M0,-5A5,5 0 1,1 -4.005763,2.992300Q 0,0 0,-5Z");
    },
    "source accessor function can be overridden": function(chord) { 
      var f = function(d) { return { startAngle: 60, endAngle: 20}; }
      var c = chord().source(f).target({startAngle: 60, endAngle: 20}).radius(5).startAngle(0).endAngle(180);
      assert.pathEqual(c(), "M0,-5A5,5 0 1,1 -4.005763,2.992300Q 0,0 0,-5Z");

    }
  }
});

suite.export(module);
