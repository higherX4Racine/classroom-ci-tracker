const { Benchmark } = require("../../build/benchmark.js");

QUnit.module("Benchmark");

const september = new Benchmark(0, 2, 4);
const november = new Benchmark(2, 9, 5,);
const february = new Benchmark(12, 4, 8);
const april = new Benchmark(30, 20, 10);

QUnit.test("Benchmark boundaries get an extra infinity at their end", assert => {
    assert.equal(september.length, 4);
    assert.equal(november.length, 4);
    assert.equal(february.length, 4);
    assert.equal(april.length, 4);
});

QUnit.test("Benchmark boundaries are sorted", assert => {
    assert.deepEqual(september._boundaries, [0, 2, 4, Infinity]);
    assert.deepEqual(november._boundaries, [2, 5, 9, Infinity]);
    assert.deepEqual(february._boundaries, [4, 8, 12, Infinity]);
    assert.deepEqual(april._boundaries, [10, 20, 30, Infinity]);
});

QUnit.test("Benchmark searching returns the index of the level a score achieves", assert => {
    assert.equal(september.level(6), 3);
    assert.equal(november.level(6), 2);
    assert.equal(february.level(6), 1);
    assert.equal(april.level(6), 0);
});