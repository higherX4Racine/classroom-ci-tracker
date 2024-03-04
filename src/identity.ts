export namespace Classes {
    /** Name and ID number fields for a person */
    export class Identity {
        protected _givenName: string;
        protected _familyName: string;
        protected _number: bigint;
        /**
         * @param {string} givenName - the person's personal name, like "Ben"
         * @param {string} familyName - the person's lineal name, like "Taft"
         * @param {bigint} number - the person's identification number
         */
        constructor(givenName: string, familyName: string, number: bigint) {
            this._givenName = givenName;
            this._familyName = familyName;
            this._number = number;
        }

        /**
         * the person's individual name, like "Sue"
         * @returns {string}
         */
        get givenName(): string {
            return this._givenName;
        }

        /**
         * the person's lineal name, like "Cash"
         * @returns {string}
         */
        get familyName(): string {
            return this._familyName;
        }

        /**
         * the person's identification number, like "1138"
         * @returns {bigint}
         */
        get number(): bigint {
            return this._number;
        }
    }
}