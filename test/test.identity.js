const {Classes} = require("../build/identity.js")

QUnit.module("Identity");

QUnit.test("John Doe", assert => {
    john_doe = new Classes.Identity("John", "Doe", 123);
    assert.equal(john_doe.givenName, "John");
    assert.equal(john_doe.familyName, "Doe");
    assert.equal(john_doe.number, 123);
});