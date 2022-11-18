import {Region} from './Region.js';

/**
 * Represents a Region that contains Blocks
 */
export class RegionLeaf extends Region {
    #blocks = [];
    #blockMap;

    draw(context) {
        this.#blocks.forEach(function(block) { block.draw(context); });
    }

    addBlock(block) {
        // TODO: Map location
        this.#blocks.push(block);
    }
}