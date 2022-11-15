/**
 * Manages a collection of Actors that get ticked and may get rendered to a Viewport.
 */
class Stage {
    #actors = [];

    getActorsInView(viewport) {
        // TODO: Prune to current viewport
        return this.#actors;
    }

    addActor(actor) {
        this.#actors.push(actor);
    }

    tick() {
        this.#actors.forEach(function(actor) {
            actor.tick();
        });
    }
}