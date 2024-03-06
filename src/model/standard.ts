import { Benchmark } from "./benchmark";
export class Standard {
    _labels: Array<string>;
    _benchmarks: { [when: number]: Benchmark };

    /**
     * 
     * @param {Array<string>} achievement_labels - an array of labels for the different levels
     * @param {{[when: number]: Benchmark}} benchmarks - a dictionary of number - array pairs
     */
    constructor(achievement_labels: Array<string>, benchmarks: { [when: number]: Benchmark }) {
        this._labels = Array(...achievement_labels);
        this._benchmarks = {};
        Object.entries(benchmarks).forEach(([index, thresholds]) => {
            if (!this.correct_size(thresholds)) {
                throw new Error(
                    `Problem with the thresholds for ${index}:
                    It contains ${thresholds.length} elements, but it must have exactly ${this.levels}.`
                );
            }
            this._benchmarks[index] = thresholds;
        });
    }

    /** The number of levels that this standard divides scores into. */
    get levels(): number {
        return this._labels.length;
    }

    /**
     * Verify that an array of threshold values is appropriate for this standard.
     *  
     * @param {Benchmark} thresholds - a sequence of threshold values 
     * @returns {boolean} `true` when the array's length is equal to the instance's labels' length.
     */
    correct_size(thresholds: Benchmark): boolean {
        return thresholds.length == this.levels;
    }

    /**
     * Look up an achievement level by score and when the observation occurred
     * 
     * @param {number} when - The time that the score was observed
     * @param {number} score - A score on an assessment
     * @returns {string} the label of the achievement level
     */
    achievement_level(when: number, score: number): string {
        return this._labels[this._benchmarks[when].level(score)];
    }
}