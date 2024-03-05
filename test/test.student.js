const { Identity } = require("../build/identity.js");
const { Assessment } = require("../build/assessment.js");
const { Student } = require("../build/student.js");

QUnit.module("Student");

const person = new Identity("John", "Doe", 123);

const orf = new Assessment([1, 1], [2, 2], [3, 3]);

const lts = new Assessment();
[9, 16, 23, 26].forEach((v, i) => lts[i] = v);

const student = new Student(
    person,
    ["G/T", "SPED", "ELL", "SPED"],
    ["ORF", orf],
    ["Letter Sounds", lts]
);

QUnit.test("student information", assert => {
    assert.equal(student.identity + "", "John Doe");
    assert.ok(student.hasService("SPED"));
    assert.ok(student.hasService("G/T"));
    assert.ok(student.hasService("ELL"));
    assert.notOk(student.hasService("Virtual"));
    assert.deepEqual(student.assessment("ORF"), orf);
    assert.deepEqual(student.assessment("Letter Sounds"), lts);
    assert.equal(student.assessment("froboz"));
})
