/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { IEllipse } from './IEllipse';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Returns a Point object containing the coordinates of a point on the circumference of the Ellipse based on the given angle.
 *
 * @function Phaser.Geom.Ellipse.CircumferencePoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Ellipse} ellipse - The Ellipse to get the circumference point on.
 * @param {number} angle - The angle from the center of the Ellipse to the circumference to return the point from. Given in radians.
 * @param {(Phaser.Geom.Point|object)} [out] - A Point, or point-like object, to store the results in. If not given a Point will be created.
 *
 * @return {(Phaser.Geom.Point|object)} A Point object where the `x` and `y` properties are the point on the circumference.
 */
export function CircumferencePoint (ellipse: IEllipse, angle: number, out: Vec2 = new Vec2()): Vec2
{
    const halfWidth = ellipse.width / 2;
    const halfHeight = ellipse.height / 2;

    return out.set(
        ellipse.x + halfWidth * Math.cos(angle),
        ellipse.y + halfHeight * Math.sin(angle)
    );
}
