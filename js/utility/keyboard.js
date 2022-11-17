/**
 * Tracks keyboard input
 */
class Keyboard {
    #pressed = {};

    onKeyUp(key) {
        delete this.#pressed[key];
    }

    onKeyDown(key) {
        this.#pressed[key] = true;
    }

    clear() {
        this.#pressed = {};
    }

    isPressed(key) {
        return this.#pressed.hasOwnProperty(key);
    }
}