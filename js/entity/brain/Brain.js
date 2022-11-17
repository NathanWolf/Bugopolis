import {Vector} from '../../utility/Vector.js';

/**
 * An abstract brain that controls a LivingEntity.
 */
export class Brain {
    getDirection() {
        return Vector.NONE;
    }

    tick() {
    }
}