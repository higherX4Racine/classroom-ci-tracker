const { Benchmark } = require("../../build/model/benchmark.js");
const { Standard } = require("../../build/model/standard.js");

QUnit.module("Standard");

const achievement_levels = [
    "Urgent",
    "Needs Intervention",
    "Proficient",
    "Advanced"
];

const boundaries = {
    9: new Benchmark(0, 2, 4),
    11: new Benchmark(2, 5, 9),
    2: new Benchmark(4, 8, 12),
    4: new Benchmark(10, 20, 30)
};

const standard = new Standard(achievement_levels, boundaries);

QUnit.test("Creating a Standard instance works", assert => {
    assert.equal(standard.levels, achievement_levels.length);
    assert.ok(standard.correct_size(boundaries[9]));
    assert.equal(standard.achievement_label(9, 6), "Advanced");
    assert.equal(standard.achievement_label(11, 6), "Proficient");
    assert.equal(standard.achievement_label(2, 6), "Needs Intervention");
    assert.equal(standard.achievement_label(4, 6), "Urgent");
    assert.equal(standard.achievement_level(9, 6), 3);
    assert.equal(standard.achievement_level(11, 6), 2);
    assert.equal(standard.achievement_level(2, 6), 1);
    assert.equal(standard.achievement_level(4, 6), 0);
})

QUnit.test("JSON serialization of Standard instances", assert => {
    const as_string = JSON.stringify(standard);
    assert.equal(as_string, `[${JSON.stringify(achievement_levels)},${JSON.stringify(boundaries)}]`);
    assert.deepEqual(Standard.fromJSON(JSON.parse(as_string)), standard);
})