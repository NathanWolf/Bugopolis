/**
 * An entity that has a physical presence in a World.
 */
class PhysicalEntity extends Entity {
    #location = new Vector();

    getLocation() {
        return this.#location;
    }

    move(delta) {
        this.#location.add(delta);
    }
}