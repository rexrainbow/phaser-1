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
 * so that it fully covers the area of the source rectangle, while maintaining its original
 * aspect ratio.
 *
 * Unlike the `FitRectangleInside` function, the target rectangle may extend further out than the source.
 */
export function FitRectangleOutside (target: IRectangle, source: IRectangle): IRectangle
{
    const ratio = GetRectangleAspectRatio(target);
    let width = source.width;
    let height = source.height;

    if (ratio > GetRectangleAspectRatio(source))
    {
        //  Wider than Tall
        width = source.height * ratio;
    }
    else
    {
        //  Taller than Wide
        height = source.width / ratio;
    }

    return target.set(
        GetRectangleCenterX(source) - target.width / 2,
        GetRectangleCenterY(source) - target.height / 2,
        width,
        height
    );
}
