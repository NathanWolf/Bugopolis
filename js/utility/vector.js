/**
 * A 2D vector.
 *
 * This can represent a location or a direction in 2-D space
 */
class Vector {
    static NONE = new Vector();

    #x;
    #y;

    constructor(x, y) {
        this.#x = typeof x === 'undefined' ? 0 : x;
        this.#y = typeof y === 'undefined' ? 0 : y;
    }

    getX() {
        return this.#x;
    }

    getY() {
        return this.#y;
    }

    setX(x) {
        this.#x = x;
    }

    setY(y) {
        this.#y = y;
    }

    add(other) {
        this.#x += other.getX();
        this.#y += other.getY();
    }

    addX(delta) {
        this.#x += delta;
    }

    addY(delta) {
        this.#y += delta;
    }
}