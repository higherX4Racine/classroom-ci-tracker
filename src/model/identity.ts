/** Name and ID number fields for a person */
export class Identity {
    protected _given: string;
    protected _family: string;
    protected _number: bigint;
    /**
     * @param {string} given - the person's personal name, like "Ben"
     * @param {string} family - the person's lineal name, like "Taft"
     * @param {bigint} number - the person's identification number
     */
    constructor(given: string, family: string, number: bigint) {
        this._given = given;
        this._family = family;
        this._number = number;
    }

    /**
     * the person's individual name, like "Sue"
     * @returns {string}
     */
    get givenName(): string {
        return this._given;
    }

    /**
     * the person's lineal name, like "Cash"
     * @returns {string}
     */
    get familyName(): string {
        return this._family;
    }

    /**
     * the person's identification number, like "1138"
     * @returns {bigint}
     */
    get number(): bigint {
        return this._number;
    }

    toString(): string {
        return `${this._given} ${this._family}`;
    }

    toJSON(): [string, string, bigint] {
        return [this.givenName, this.familyName, this.number];
    }
}