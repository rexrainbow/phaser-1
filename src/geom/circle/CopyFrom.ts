/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import ICircle from './ICircle';

/**
 * Copies the `x`, `y` and `radius` properties from the `source` Circle
 * into the given `dest` Circle, then returns the `dest` Circle.
 *
 * @function Phaser.Geom.Circle.CopyFrom
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Circle} O - [dest,$return]
 *
 * @param {Phaser.Geom.Circle} source - The source Circle to copy the values from.
 * @param {Phaser.Geom.Circle} dest - The destination Circle to copy the values to.
 *
 * @return {Phaser.Geom.Circle} The destination Circle.
 */
export default function CopyFrom (source: ICircle, dest: ICircle): ICircle
{
    return dest.set(source.x, source.y, source.radius);
}
