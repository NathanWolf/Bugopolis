/**
 * Represents a specific view of a Stage that gets rendered to an HTML Canvas.
 */
class Viewport {
    #canvas = null;
    #context = null;
    #stage = null;

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

    setStage(stage) {
        this.#stage = stage;
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

        // Render all actors in view
        if (this.#stage == null) return;

        let actors = this.#stage.getActorsInView(this);
        actors.forEach(function(actor) { actor.draw(context); });
    }
}