/** Name and ID number fields for a person */
export class Identity {
    protected _given: string;
    protected _family: string;
    protected _number: bigint;
    /**
     * @param {string} family - the person's lineal name, like "Taft"
     * @param {string} given - the person's personal name, like "Ben"
     * @param {bigint} number - the person's identification number
     */
    constructor(family: string, given: string, number: bigint) {
        this._family = family;
        this._given = given;
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

    toJSON(): { family: string, given: string, number: bigint } {
        return {
            family: this.familyName,
            given: this.givenName,
            number: this.number
        };
    }

    static fromJSON(obj: {family: string, given: string, number: bigint}): Identity {
        return new Identity(obj.family, obj.given, obj.number);
    }
}