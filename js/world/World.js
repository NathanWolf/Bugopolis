import {RegionBranch} from './RegionBranch.js';

/**
 * Manages a collection of Entities that get ticked and may get rendered to a Viewport.
 */
export class World extends RegionBranch {
    #entities = [];

    addEntity(entity) {
        this.#entities.push(entity);
    }

    tick() {
        this.#entities.forEach(function(entity) {
            entity.tick();
        });
    }

    draw(context) {
        // TODO: Filter by viewport
        super.draw(context);
        this.#entities.forEach(function(entity) { entity.draw(context); });
    }
}