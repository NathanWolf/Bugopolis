import {Entity} from './Entity.js';
import {Vector} from '../utility/Vector.js';


/**
 * An entity that has a physical presence in a World.
 */
export class PhysicalEntity extends Entity {
    #location = new Vector();

    getLocation() {
        return this.#location;
    }

    move(delta) {
        this.#location.add(delta);
    }
}