import { slugify } from "../utilities";
import { Standard } from "../model/standard";

/** Render color-coded text in HTML for one numeric score on an assessment.*/
export class ObservationView {
    _standard: Standard;
    _labels: Array<string>;
    _element_type: string;
    _other_classes: Array<string>;
    /**
     * 
     * @param {Standard} standard - instance for converting numeric scores to string achievement labels 
     * @param {string} [element_type=span] - the type of HTML element to render 
     * @param {Array<string>} [other_classes=[]] - any additional classes to add to the element
     */
    constructor(standard: Standard, element_type: string = "span", other_classes: Array<string> = []) {
        this._standard = standard;
        this._labels = standard
            .labels
            .map(slugify);
        this._element_type = element_type;
        this._other_classes = other_classes;
    }

    /**
     * Create a space-separated list of class names suitable for use as an HTML attribute
     *
     * @param {string} achievement_class - the class name corresponding to a score's achievement level
     * @returns {string} any class names passed to the constructor, plus the achievement class.
     */
    classes(achievement_class: string): string {
        return [
            ...this._other_classes,
            achievement_class
        ].join(" ");
    }

    /**
     * A string representation of the score as an HTML element with class information for color coding.
     * @param {number} when - the time the observation was made 
     * @param {number} score - the value of the observation 
     * @returns {string} an HTML element with class info and the `score` as its innerText
     */
    render(when: number, score: number): string {
        const lvl = this._standard.achievement_level(when, score);
        const cls = this.classes(this._labels[lvl]);
        return `<${this._element_type} class="${cls}">${score}</${this._element_type}>`;
    }
}