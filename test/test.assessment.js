const { Assessment } = require("../build/assessment.js")

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