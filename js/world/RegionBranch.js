import {Region} from './Region.js';
import {RegionLeaf} from "./RegionLeaf.js";

/**
 * Represents a Region that contains other Regions.
 */
export class RegionBranch extends Region {
    #regions = [];
    #regionMap;

    draw(context) {
        this.#regions.forEach(function(region) { region.draw(context); });
    }

    addBlock(block) {
        // TODO: Map region
        if (this.#regions.length == 0) {
            let region = new RegionLeaf();
            region.addBlock(block);
            this.#regions.push(region);
        }
    }
}