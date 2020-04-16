/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import ITriangle from './ITriangle';

/**
 * Copy the values of one Triangle to a destination Triangle.
 *
 * @function Phaser.Geom.Triangle.CopyFrom
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Triangle} O - [dest,$return]
 *
 * @param {Phaser.Geom.Triangle} source - The source Triangle to copy the values from.
 * @param {Phaser.Geom.Triangle} dest - The destination Triangle to copy the values to.
 *
 * @return {Phaser.Geom.Triangle} The destination Triangle.
 */
export default function CopyFrom (source: ITriangle, dest: ITriangle): ITriangle
{
    const { x1, y1, x2, y2, x3, y3 } = source;

    return dest.set(x1, y1, x2, y2, x3, y3);
}
