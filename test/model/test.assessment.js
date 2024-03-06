const { Assessment } = require("../../build/assessment.js")

QUnit.module("Assessment");

pi = new Assessment([0, 3], [1, 1], [2, 4], [4, 5]);

QUnit.test("assessments are dictionary-like objects with number keys and values",
    assert => {
        assert.ok(2 in pi);
        assert.notOk(3 in pi);
        assert.equal(pi[3], undefined);
        assert.equal(pi[0], 3);
    }
);

QUnit.test("the numeric keys of an assessment can be queried directly",
    assert => {
        assert.deepEqual(pi.indices(), [0, 1, 2, 4]);
    }
);

QUnit.test("JSON serialization of Assessment instances", assert => {
    const as_string = JSON.stringify(pi);
    assert.equal(as_string, "[[0,3],[1,1],[2,4],[4,5]]");
    const as_object = JSON.parse(as_string);
    assert.deepEqual(as_object, [[0, 3], [1, 1], [2, 4], [4, 5]]);
    tau = new Assessment(...as_object);
    assert.deepEqual(tau, pi);
});