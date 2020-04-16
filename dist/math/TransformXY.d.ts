/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import Vec2 from './vec2/Vec2';
/**
 * Takes the `x` and `y` coordinates and transforms them into the same space as
 * defined by the position, rotation and scale values.
 *
 * @function Phaser.Math.TransformXY
 * @since 3.0.0
 *
 * @param {number} x - The x coordinate to be transformed.
 * @param {number} y - The y coordinate to be transformed.
 * @param {number} positionX - Horizontal position of the transform point.
 * @param {number} positionY - Vertical position of the transform point.
 * @param {number} rotation - Rotation of the transform point, in radians.
 * @param {number} scaleX - Horizontal scale of the transform point.
 * @param {number} scaleY - Vertical scale of the transform point.
 * @param {Vec2} [output] - The output vector, point or object for the translated coordinates.
 *
 * @return {Vec2} The translated point.
 */
export default function TransformXY(x: number, y: number, positionX: number, positionY: number, rotation: number, scaleX: number, scaleY: number, output?: Vec2): Vec2;
//# sourceMappingURL=TransformXY.d.ts.map