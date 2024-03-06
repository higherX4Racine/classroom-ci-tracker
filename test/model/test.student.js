const { Identity } = require("../../build/identity.js");
const { Assessment } = require("../../build/assessment.js");
const { Student } = require("../../build/student.js");

QUnit.module("Student");

const person = new Identity("Doe", "John", 123);

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
    assert.deepEqual(student.assessment("ORF").indices(), [1, 2, 3]);
    assert.deepEqual(student.assessment("Letter Sounds"), lts);
    assert.deepEqual(student.assessment("Letter Sounds").indices(), [0, 1, 2, 3]);
    assert.equal(student.assessment("froboz"));
})

QUnit.test("JSON serialization of Student objects", assert => {
    const should_be = '[{"family":"Doe","given":"John","number":123},["G/T","SPED","ELL"],[["ORF",[[1,1],[2,2],[3,3]]],["Letter Sounds",[[0,9],[1,16],[2,23],[3,26]]]]]'
    const as_string = JSON.stringify(student);
    assert.equal(as_string, should_be);
    assert.deepEqual(Student.fromJSON(JSON.parse(as_string)), student);
})