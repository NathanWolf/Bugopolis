/**
 * An actor that has a physical presence on a Stage.
 */
class PhysicalActor extends Actor {
    #location = new Vector();

    getLocation() {
        return this.#location;
    }

    move(delta) {
        this.#location.add(delta);
    }
}