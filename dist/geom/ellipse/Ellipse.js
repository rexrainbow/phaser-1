/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
/**
 * @classdesc
 * An Ellipse object.
 *
 * This is a geometry object, containing numerical values and related methods to inspect and modify them.
 * It is not a Game Object, in that you cannot add it to the display list, and it has no texture.
 * To render an Ellipse you should look at the capabilities of the Graphics class.
 *
 * @class Ellipse
 * @memberof Phaser.Geom
 * @constructor
 * @since 3.0.0
 *
 * @param {number} [x=0] - The x position of the center of the ellipse.
 * @param {number} [y=0] - The y position of the center of the ellipse.
 * @param {number} [width=0] - The width of the ellipse.
 * @param {number} [height=0] - The height of the ellipse.
 */
export default class Ellipse {
    constructor(x = 0, y = 0, width = 0, height = 0) {
        this.set(x, y, width, height);
    }
    set(x = 0, y = 0, width = 0, height = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        return this;
    }
    /**
     * Check to see if the Ellipse contains the given x / y coordinates.
     *
     * @method Phaser.Geom.Ellipse#contains
     * @since 3.0.0
     *
     * @param {number} x - The x coordinate to check within the ellipse.
     * @param {number} y - The y coordinate to check within the ellipse.
     *
     * @return {boolean} True if the coordinates are within the ellipse, otherwise false.
     */
    contains(x, y) {
        return false;
    }
    /**
     * Returns the minor radius of the ellipse. Also known as the Semi Minor Axis.
     *
     * @method Phaser.Geom.Ellipse#getMinorRadius
     * @since 3.0.0
     *
     * @return {number} The minor radius.
     */
    getMinorRadius() {
        return Math.min(this.width, this.height) / 2;
    }
    /**
     * Returns the major radius of the ellipse. Also known as the Semi Major Axis.
     *
     * @method Phaser.Geom.Ellipse#getMajorRadius
     * @since 3.0.0
     *
     * @return {number} The major radius.
     */
    getMajorRadius() {
        return Math.max(this.width, this.height) / 2;
    }
    get left() {
        return this.x - (this.width / 2);
    }
    set left(value) {
        this.x = value + (this.width / 2);
    }
    get right() {
        return this.x + (this.width / 2);
    }
    set right(value) {
        this.x = value - (this.width / 2);
    }
    get top() {
        return this.y - (this.height / 2);
    }
    set top(value) {
        this.y = value + (this.height / 2);
    }
    get bottom() {
        return this.y + (this.height / 2);
    }
    set bottom(value) {
        this.y = value - (this.height / 2);
    }
}
//# sourceMappingURL=Ellipse.js.map