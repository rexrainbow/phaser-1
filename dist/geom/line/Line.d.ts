/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
/**
 * @classdesc
 * Defines a Line segment, a part of a line between two endpoints.
 *
 * @class Line
 * @memberof Phaser.Geom
 * @constructor
 * @since 3.0.0
 *
 * @param {number} [x1=0] - The x coordinate of the lines starting point.
 * @param {number} [y1=0] - The y coordinate of the lines starting point.
 * @param {number} [x2=0] - The x coordinate of the lines ending point.
 * @param {number} [y2=0] - The y coordinate of the lines ending point.
 */
export default class Line {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    constructor(x1?: number, y1?: number, x2?: number, y2?: number);
    set(x1?: number, y1?: number, x2?: number, y2?: number): this;
    get left(): number;
    set left(value: number);
    get right(): number;
    set right(value: number);
    get top(): number;
    set top(value: number);
    get bottom(): number;
    set bottom(value: number);
}
//# sourceMappingURL=Line.d.ts.map