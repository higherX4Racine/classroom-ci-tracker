const { Identity } = require("../../build/identity.js")

QUnit.module("Identity");

john_doe = new Identity("Doe", "John", 123);

QUnit.test("An example identity has all of its fields.", assert => {
    assert.equal(john_doe.givenName, "John");
    assert.equal(john_doe.familyName, "Doe");
    assert.equal(john_doe.number, 123);
    assert.equal("" + john_doe, "John Doe");
});

QUnit.test("JSON serialization of an Identity instance", assert => {
    const as_string = JSON.stringify(john_doe);
    assert.equal(as_string, '{"family":"Doe","given":"John","number":123}');
    const doe_john = new Identity(...Object.values(JSON.parse(as_string)));
    assert.deepEqual(doe_john, john_doe);
})