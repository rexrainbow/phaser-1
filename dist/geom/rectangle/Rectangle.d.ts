/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
export default class Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x?: number, y?: number, width?: number, height?: number);
    set(x?: number, y?: number, width?: number, height?: number): this;
    contains(x: number, y: number): boolean;
    set right(value: number);
    get right(): number;
    set bottom(value: number);
    get bottom(): number;
}
//# sourceMappingURL=Rectangle.d.ts.map