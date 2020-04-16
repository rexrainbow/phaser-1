/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import ITriangle from './ITriangle';
import Vec2 from '../../math/vec2/Vec2';


/**
 * Calculates the position of a Triangle's centroid, which is also its center of mass (center of gravity).
 *
 * The centroid is the point in a Triangle at which its three medians (the lines drawn from the vertices to the bisectors of the opposite sides) meet. It divides each one in a 2:1 ratio.
 * 
 * The three medians (the lines drawn from the vertices to the bisectors of the opposite sides)
 * meet in the centroid or center of mass (center of gravity).
 * The centroid divides each median in a ratio of 2:1
 *
 * @function Phaser.Geom.Triangle.Centroid
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to use.
 * @param {(Phaser.Geom.Point|object)} [out] - An object to store the coordinates in.
 *
 * @return {(Phaser.Geom.Point|object)} The `out` object with modified `x` and `y` properties, or a new Point if none was provided.
 */
export default function Centroid (triangle: ITriangle, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        (triangle.x1 + triangle.x2 + triangle.x3) / 3,
        (triangle.y1 + triangle.y2 + triangle.y3) / 3
    );
}
