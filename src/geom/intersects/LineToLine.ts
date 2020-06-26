/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ILine } from '../line/ILine';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Checks if two Lines intersect.
 * If the Lines are identical, they will be treated as parallel and thus non-intersecting.
 * 
 * This is based off an explanation and expanded math presented by Paul Bourke:
 * See http://local.wasp.uwa.edu.au/~pbourke/geometry/lineline2d/
 *
 * @function Phaser.Geom.Intersects.LineToLine
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line1 - The first Line to check.
 * @param {Phaser.Geom.Line} line2 - The second Line to check.
 * @param {Phaser.Geom.Point} [out] - A Point in which to optionally store the point of intersection.
 *
 * @return {boolean} `true` if the two Lines intersect, and the `out` object will be populated, if given. Otherwise, `false`.
 */
export function LineToLine (line1: ILine, line2: ILine, out?: Vec2): boolean
{
    const { x1, y1, x2, y2 } = line1;
    const { x1: x3, y1: y3, x2: x4, y2: y4 } = line2;

    const numA = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
    const numB = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);
    const deNom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

    //  Make sure there is not a division by zero - this also indicates that the lines are parallel.
    //  If numA and numB were both equal to zero the lines would be on top of each other (coincidental).
    //  This check is not done because it is not necessary for this implementation (the parallel check accounts for this).

    if (deNom === 0)
    {
        return false;
    }

    //  Calculate the intermediate fractional point that the lines potentially intersect.

    const uA = numA / deNom;
    const uB = numB / deNom;

    //  The fractional point will be between 0 and 1 inclusive if the lines intersect.
    //  If the fractional calculation is larger than 1 or smaller than 0 the lines would need to be longer to intersect.

    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1)
    {
        if (out)
        {
            out.set(
                x1 + (uA * (x2 - x1)),
                y1 + (uA * (y2 - y1))
            );
        }

        return true;
    }

    return false;
}
