const { slugify } = require("../build/utilities.js");

QUnit.module("helper functions in the 'utilities' module");

QUnit.test("slugify", assert => {
    assert.equal(slugify(""), "");
    assert.equal(slugify(" "), "");
    assert.equal(slugify(" Hello, World"), "hello-world");
    assert.equal(slugify("THX 1138"), "thx-1138");
})