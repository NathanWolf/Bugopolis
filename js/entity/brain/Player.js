import {Brain} from './Brain.js';
import {Vector} from '../../utility/Vector.js';

/**
 * A brain that gets its inputs from a player.
 */
export class Player extends Brain {
    #keyboard;
    #direction = new Vector();

    getDirection() {
        return this.#direction;
    }

    setKeyboard(keyboard) {
        this.#keyboard = keyboard;
    }

    tick() {
        this.#direction.setX(0);
        this.#direction.setY(0);
        if (this.#keyboard != null) {
            if (this.#keyboard.isPressed('ArrowLeft') || this.#keyboard.isPressed('a')) {
                this.#direction.addX(-1);
            }
            if (this.#keyboard.isPressed('ArrowRight') || this.#keyboard.isPressed('d')) {
                this.#direction.addX(1);
            }
        }
    }
}