/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import Contains from './Contains';
/**
 * @classdesc
 * A Circle object.
 *
 * This is a geometry object, containing numerical values and related methods to inspect and modify them.
 * It is not a Game Object, in that you cannot add it to the display list, and it has no texture.
 * To render a Circle you should look at the capabilities of the Graphics class.
 *
 * @class Circle
 * @memberof Phaser.Geom
 * @constructor
 * @since 3.0.0
 *
 * @param {number} [x=0] - The x position of the center of the circle.
 * @param {number} [y=0] - The y position of the center of the circle.
 * @param {number} [radius=0] - The radius of the circle.
 */
export default class Circle {
    constructor(x = 0, y = 0, radius = 0) {
        this.set(x, y, radius);
    }
    set(x = 0, y = 0, radius = 0) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        return this;
    }
    contains(x, y) {
        return Contains(this, x, y);
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
        this._diameter = value * 2;
    }
    get diameter() {
        return this._diameter;
    }
    set diameter(value) {
        this._diameter = value;
        this._radius = value * 0.5;
    }
    get left() {
        return this.x - this._radius;
    }
    set left(value) {
        this.x = value + this._radius;
    }
    get right() {
        return this.x + this._radius;
    }
    set right(value) {
        this.x = value - this._radius;
    }
    get top() {
        return this.y - this._radius;
    }
    set top(value) {
        this.y = value + this._radius;
    }
    get bottom() {
        return this.y + this._radius;
    }
    set bottom(value) {
        this.y = value - this._radius;
    }
}
//# sourceMappingURL=Circle.js.map