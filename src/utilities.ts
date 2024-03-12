/**
 * Miscellaneous useful functions
 */

/**
 * Convert some text into a dash-separated slug-like-this
 * @param {string} text - a string that may contain capital letters and/or whitespace
 * @returns {string} all lowercase, text-connected-by-dashes
 */
function slugify(text: string): string {
    return text
        .trim()
        .replaceAll(/[^\w\s\d]/g, "")
        .toLowerCase()
        .replaceAll(/\s+/g, "-");
}

export {
    slugify
}