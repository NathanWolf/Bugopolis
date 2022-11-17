/**
 * Manages a collection of Entities that get ticked and may get rendered to a Viewport.
 */
class World {
    #entities = [];

    getEntitiesInView(viewport) {
        // TODO: Prune to current viewport
        return this.#entities;
    }

    addEntity(entity) {
        this.#entities.push(entity);
    }

    tick() {
        this.#entities.forEach(function(entity) {
            entity.tick();
        });
    }
}