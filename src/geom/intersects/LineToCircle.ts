/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { CircleContains } from '../circle/CircleContains';
import { ICircle } from '../circle/ICircle';
import { ILine } from '../line/ILine';
import { Vec2 } from '../../math/vec2/Vec2';

const tmp: Vec2 = new Vec2();

/**
 * Checks for intersection between the line segment and circle.
 *
 * Based on code by [Matt DesLauriers](https://github.com/mattdesl/line-circle-collision/blob/master/LICENSE.md).
 */
export function LineToCircle (line: ILine, circle: ICircle, nearest?: Vec2): boolean
{
    if (!nearest)
    {
        nearest = tmp;
    }

    const { x1, y1, x2, y2 } = line;

    if (CircleContains(circle, x1, y1))
    {
        nearest.set(x1, y1);

        return true;
    }

    if (CircleContains(circle, x2, y2))
    {
        nearest.set(x2, y2);

        return true;
    }

    const dx = x2 - x1;
    const dy = y2 - y1;

    const lcx = circle.x - x1;
    const lcy = circle.y - y1;

    //  project lc onto d, resulting in vector p
    const dLen2 = (dx * dx) + (dy * dy);
    let px = dx;
    let py = dy;

    if (dLen2 > 0)
    {
        const dp = ((lcx * dx) + (lcy * dy)) / dLen2;

        px *= dp;
        py *= dp;
    }

    nearest.set(x1 + px, y1 + py);

    //  len2 of p
    const pLen2 = (px * px) + (py * py);

    return (
        pLen2 <= dLen2 &&
        ((px * dx) + (py * dy)) >= 0 &&
        CircleContains(circle, nearest.x, nearest.y)
    );
}
