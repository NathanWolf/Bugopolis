/**
 * An actor for testing
 */
class Wanderer extends Actor {
    #x = 0;
    #y = 0;
    #direction = [1, 1];

    draw(context) {
        context.fillStyle = 'blue';
        context.strokeStyle = 'green';
        context.beginPath();
        context.arc(this.#x, this.#y, 10, 0, 2 * Math.PI);
        context.stroke();
    }

    tick() {
        this.#x += this.#direction[0];
        this.#y += this.#direction[1];
    }
}