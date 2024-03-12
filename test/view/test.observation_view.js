const { Standard } = require("../../build/model/standard.js");
const { ObservationView } = require("../../build/view/observation_view.js");

QUnit.module("Rendering an Observation View");

const standard = Standard.fromJSON([
    [
        "Urgent",
        "Needs Intervention",
        "Proficient",
        "Advanced"
    ], {
        9: [0, 2, 4],
        11: [2, 5, 9],
        2: [4, 8, 12],
        4: [10, 20, 30]
    }
]);

const default_view = new ObservationView(standard);

QUnit.test("rendering as a default", assert => {
    assert.equal(
        default_view.render(2, 5),
        '<span class="needs-intervention">5</span>'
    );
})