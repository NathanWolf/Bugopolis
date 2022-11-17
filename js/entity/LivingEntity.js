/**
 * An entity that has animated parts and can move around.
 */
class LivingEntity extends PhysicalEntity {
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