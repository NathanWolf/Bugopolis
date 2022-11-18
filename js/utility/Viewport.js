import {Vector} from './Vector.js';

/**
 * Represents a specific view of a Stage that gets rendered to an HTML Canvas.
 */
export class Viewport {
    #center = new Vector();
    #scale = 1;
    #canvas = null;
    #context = null;
    #world = null;

    constructor(canvas) {
        this.#canvas = canvas;
        this.#context = canvas.getContext('2d');

        this.resize();
        this.#scheduleRedraw();
    }

    resize() {
        this.#canvas.width = window.innerWidth;
        this.#canvas.height = window.innerHeight;
    }

    redraw() {
        this.#draw();
        this.#scheduleRedraw();
    }

    setWorld(world) {
        this.#world = world;
    }

    #scheduleRedraw() {
        let viewport = this;
        window.requestAnimationFrame(function() {
            viewport.redraw();
        });
    }

    #draw() {
        let context = this.#context;

        // Clear canvas
        context.globalCompositeOperation = 'destination-over';
        context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);

        // Render the world
        if (this.#world != null) {
            let center = new Vector(this.#canvas.width / 2 + this.#center.getX(), this.#canvas.height / 2 + this.#center.getY())
            context.save();
            context.translate(center.getX(), center.getY());
            // Invert Y-axis so positive is up
            context.scale(this.#scale, -this.#scale);
            this.#world.draw(context);
            context.restore();
        }
    }
}