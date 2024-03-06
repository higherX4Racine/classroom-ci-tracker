/** Sorted boundaries for converting from continouous scores to discrete achievement levels. */
export class Benchmark {
    _boundaries: Array<number>;
    /**
     * @param {...number} boundaries - cutoff points between achievement levels, must be one fewer than the number of levels.
     */
    constructor(...boundaries: Array<number>) {
        this._boundaries = Array(...boundaries, Infinity);
        this._boundaries.sort((a, b) => a - b);
    }

    /**
     * Use the stored boundaries to match a score to an achievement level
     * @param {number} score - a score from a continuous scale 
     * @returns {number} the index of the achievement level that the score corresponds to.
     */
    level(score: number): number {
        return this._boundaries.findIndex((boundary) => score <= boundary);
    }

    /** The number of levels that this instance can distinguish among */
    get length(): number {
        return this._boundaries.length;
    }
}