/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
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
    x: number;
    y: number;
    private _radius;
    private _diameter;
    constructor(x?: number, y?: number, radius?: number);
    set(x?: number, y?: number, radius?: number): this;
    contains(x: number, y: number): boolean;
    get radius(): number;
    set radius(value: number);
    get diameter(): number;
    set diameter(value: number);
    get left(): number;
    set left(value: number);
    get right(): number;
    set right(value: number);
    get top(): number;
    set top(value: number);
    get bottom(): number;
    set bottom(value: number);
}
//# sourceMappingURL=Circle.d.ts.map