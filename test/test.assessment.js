const { Assessment } = require("../build/assessment.js")

QUnit.module("Assessment");

QUnit.test("assessments are dictionary-like objects with number keys and values",
    assert => {
        pi = new Assessment([0, 3], [1, 1], [2, 4], [4, 5]);
        assert.equal(pi[3], undefined);
        assert.equal(pi[0], 3);
    }
)