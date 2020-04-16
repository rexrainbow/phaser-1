/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import ICircle from './ICircle';

/**
 * Returns the circumference of the given Circle.
 *
 * @function Phaser.Geom.Circle.Circumference
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Circle} circle - The Circle to get the circumference of.
 *
 * @return {number} The circumference of the Circle.
 */
export default function Circumference (circle: ICircle): number
{
    return 2 * (Math.PI * circle.radius);
}
