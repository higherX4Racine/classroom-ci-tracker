import { Identity } from "./identity";
import { Assessment } from "./assessment";

/** Information about a student for printing in a Roster **/
export class Student {
    _identity: Identity;
    _services: Set<string>;
    _assessments: { [key: string]: Assessment };
    /**
     * @param {Identity} identity - the student's name and identity number
     * @param {Array<string>} services - which services (e.g. special education) the student gets
     * @param {Array<[string, Assessment]>} assessments - the assessments that the student has taken.
     */
    constructor(identity: Identity, services: Array<string>, ...assessments: Array<[string, Assessment]>) {
        /** Information about who the student is */
        this._identity = identity;
        /** A set of labels describing which services the student receives */
        this._services = new Set(services);
        /** The student's scores on specific tests */
        this._assessments = {};
        assessments.forEach(([label, observations]) =>
            this._assessments[label] = observations
        );
    }

    /** Information about who the student is.
     * @returns {Identity}
     */
    get identity(): Identity {
        return this._identity;
    }

    /**
     * Query if a student participates in a service like special education or gifted/talented.
     * @param {string} service - the name or abbreviation of the service.
     * @returns {boolean}
     */
    hasService(service: string): boolean {
        return this._services.has(service)
    }

    /**
     * One assessment, or `undefined` if it doesn't exist.
     * @param {string} name - the label of the assessment
     * @returns {Assessment | undefined} the students' scores on the the assessment
     */
    assessment(name: string): Assessment | undefined {
        return this._assessments[name];
    }

    toJSON(): [
        { family: string, given: string, number: bigint },
        Array<string>,
        Array<[string, Array<[number, number]>]>
    ] {
        return [
            this._identity.toJSON(),
            [...this._services],
            Object.entries(this._assessments).map(([label, assessments]) => {
                return [label, assessments.toJSON()];
            })
        ];
    }

    static fromJSON(tuple: [
        { family: string, given: string, number: bigint },
        Array<string>,
        Array<[string, Array<[number, number]>]>
    ]): Student {
        const [id_obj, services, assessment_array] = tuple;
        const assessments = assessment_array.map(name_assessment);
        return new Student(Identity.fromJSON(id_obj), services, ...assessments);
    }
}

function name_assessment(obj: [string, Array<[number, number]>]): [string, Assessment] {
    const [name, observations] = obj;
    return [name, Assessment.fromJSON(observations)];
}