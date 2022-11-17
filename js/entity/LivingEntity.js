import {PhysicalEntity} from './PhysicalEntity.js';

/**
 * An entity that has animated parts and can move around.
 */
export class LivingEntity extends PhysicalEntity {
    #brain = null;

    setBrain(brain) {
        this.#brain = brain;
    }

    tick() {
        if (this.#brain != null) {
            this.#brain.tick();
            this.move(this.#brain.getDirection());
        }
    }
}