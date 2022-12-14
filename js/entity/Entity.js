/**
 * A base class for any entity that exists in a World
 *
 * These may be rendered to a Viewport if they are in view.
 */
export class Entity {
    draw(context) { }
    tick() { }
}