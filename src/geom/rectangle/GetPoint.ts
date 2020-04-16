/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import IRectangle from './IRectangle';
import Perimeter from './Perimeter';
import Vec2 from '../../math/vec2/Vec2';

/**
 * Calculates the coordinates of a point at a certain `position` on the Rectangle's perimeter.
 * 
 * The `position` is a fraction between 0 and 1 which defines how far into the perimeter the point is.
 * 
 * A value of 0 or 1 returns the point at the top left corner of the rectangle, while a value of 0.5 returns the point at the bottom right corner of the rectangle. Values between 0 and 0.5 are on the top or the right side and values between 0.5 and 1 are on the bottom or the left side.
 *
 * @function Phaser.Geom.Rectangle.GetPoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Rectangle} rectangle - The Rectangle to get the perimeter point from.
 * @param {number} position - The normalized distance into the Rectangle's perimeter to return.
 * @param {(Phaser.Geom.Point|object)} [out] - An object to update with the `x` and `y` coordinates of the point.
 *
 * @return {Phaser.Geom.Point} The updated `output` object, or a new Point if no `output` object was given.
 */
export default function GetPoint (rectangle: IRectangle, position: number, out: Vec2 = new Vec2()): Vec2
{
    if (position <= 0 || position >= 1)
    {
        return out.set(rectangle.x, rectangle.y);
    }

    let p = Perimeter(rectangle) * position;

    if (position > 0.5)
    {
        p -= (rectangle.width + rectangle.height);

        if (p <= rectangle.width)
        {
            //  Face 3
            return out.set(rectangle.right - p, rectangle.bottom);
        }
        else
        {
            //  Face 4
            return out.set(rectangle.x, rectangle.bottom - (p - rectangle.width));
        }
    }
    else if (p <= rectangle.width)
    {
        //  Face 1
        return out.set(rectangle.x + p, rectangle.y);
    }
    else
    {
        //  Face 2
        return out.set(rectangle.right, rectangle.y + (p - rectangle.width));
    }
}
