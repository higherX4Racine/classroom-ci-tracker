/**
 * A series of observations of a student's performance on one assessment.
 * 
 * The keys indicate when the observation took place, e.g. 9 for September.
 * The values are the student's score at a particular time.
 * @typedef {[key: number]: number} Assessment
 */
export class Assessment {
    [index: number]: number;
    constructor(...observations: Array<[number, number]>) {
        observations.forEach(([when, what]) => {
            this[when] = what;
        });
    }
}
