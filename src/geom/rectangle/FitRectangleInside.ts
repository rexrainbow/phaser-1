/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { GetRectangleAspectRatio } from './GetRectangleAspectRatio';
import { GetRectangleCenterX } from './GetRectangleCenterX';
import { GetRectangleCenterY } from './GetRectangleCenterY';
import { IRectangle } from './IRectangle';

/**
 * Adjusts the target rectangle, changing its width, height and position,
 * so that it fits inside the area of the source rectangle, while maintaining its original
 * aspect ratio.
 *
 * Unlike the `FitRectangleOutside` function, there may be some space inside the source area not covered.
 */
export function FitRectangleInside (target: IRectangle, source: IRectangle): IRectangle
{
    const ratio = GetRectangleAspectRatio(target);

    let width: number = source.width;
    let height: number = source.height;

    if (ratio < GetRectangleAspectRatio(source))
    {
        //  Taller than Wide
        width = source.height * ratio;
    }
    else
    {
        //  Wider than Tall
        height = source.width / ratio;
    }

    return target.set(
        GetRectangleCenterX(source) - (target.width / 2),
        GetRectangleCenterY(source) - (target.height / 2),
        width,
        height
    );
}
