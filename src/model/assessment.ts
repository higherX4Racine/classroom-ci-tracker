/**
 * A series of observations of a student's performance on one assessment.
 * 
 * The indices indicate when the observation took place, e.g. 9 for September.
 * The values are the student's score at a particular time.
 * @typedef {[index: number]: number} Assessment
 */
export class Assessment {
    [index: number]: number;
    constructor(...observations: Array<[number, number]>) {
        observations.forEach(([when, what]) => {
            this[when] = what;
        });
    }
    /**
     * All of the times that this instance has an observation for
     * @returns {Array<number>} the unsorted indices
     */
    indices(): Array<number> {
        return Object.keys(this).map((i) => Number(i));
    }

    toJSON(): Array<[number, number]> {
        return Object.entries(this).map(([k, v]) => [Number(k), v]);
    }
}
