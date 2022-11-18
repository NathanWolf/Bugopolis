import {Vector} from "../utility/Vector.js";

/**
 * The smallest unit of a Region in a World.
 */
export class Block {
    #location;

    constructor(location) {
        this.#location = location;
    }

    draw(context) {
        context.strokeStyle = 'white';
        context.beginPath();
        context.rect(this.#location.getX() - 5, this.#location.getY() - 5, this.#location.getX() + 10, this.#location.getY() + 10);
        context.stroke();
    }
}