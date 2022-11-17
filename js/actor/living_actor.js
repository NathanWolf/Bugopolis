/**
 * An actor that has animated parts and can move around.
 */
class LivingActor extends PhysicalActor {
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