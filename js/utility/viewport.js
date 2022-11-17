/**
 * Represents a specific view of a Stage that gets rendered to an HTML Canvas.
 */
class Viewport {
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

        // Render all entities in view
        if (this.#world == null) return;

        let entities = this.#world.getEntitiesInView(this);
        entities.forEach(function(entity) { entity.draw(context); });
    }
}