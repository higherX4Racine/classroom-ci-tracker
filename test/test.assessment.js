const { Assessment } = require("../build/assessment.js")

QUnit.module("Assessment");

QUnit.test("assessments are dictionary-like objects with number keys and values",
    assert => {
        pi = {
            0: 3,
            1: 1,
            2: 4,
            4: 5
        };
        assert.deepEqual(Object.keys(pi), ["0", "1", "2", "4"]);
        assert.equal(pi[3], undefined);
        assert.equal(pi[0], 3);
    }
)