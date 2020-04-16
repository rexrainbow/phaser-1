/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import ITriangle from './ITriangle';
import Vec2 from '../../math/vec2/Vec2';
/**
 * @callback CenterFunction
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to return the center coordinates of.
 *
 * @return {Phaser.Math.Vector2} The center point of the Triangle according to the function.
 */
declare type CenterFunction = (triangle: ITriangle) => Vec2;
/**
 * Positions the Triangle so that it is centered on the given coordinates.
 *
 * @function Phaser.Geom.Triangle.CenterOn
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Triangle} O - [triangle,$return]
 *
 * @param {Phaser.Geom.Triangle} triangle - The triangle to be positioned.
 * @param {number} x - The horizontal coordinate to center on.
 * @param {number} y - The vertical coordinate to center on.
 * @param {CenterFunction} [centerFunc] - The function used to center the triangle. Defaults to Centroid centering.
 *
 * @return {Phaser.Geom.Triangle} The Triangle that was centered.
 */
export default function CenterOn(triangle: ITriangle, x: number, y: number, centerFunc?: CenterFunction): ITriangle;
export {};
//# sourceMappingURL=CenterOn.d.ts.map