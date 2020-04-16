/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
/**
 * A cubic bezier interpolation method.
 *
 * https://medium.com/@adrian_cooney/bezier-interpolation-13b68563313a
 *
 * @function Phaser.Math.Interpolation.CubicBezier
 * @since 3.0.0
 *
 * @param {number} t - The percentage of interpolation, between 0 and 1.
 * @param {number} p0 - The start point.
 * @param {number} p1 - The first control point.
 * @param {number} p2 - The second control point.
 * @param {number} p3 - The end point.
 *
 * @return {number} The interpolated value.
 */
export default function CubicBezierInterpolation(t: number, p0: number, p1: number, p2: number, p3: number): number;
//# sourceMappingURL=CubicBezierInterpolation.d.ts.map