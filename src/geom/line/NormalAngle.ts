/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import ILine from './ILine';
import MATH_CONST from '../../math/const';
import Wrap from '../../math/Wrap';
import Angle from './Angle';

/**
 * Get the angle of the normal of the given line in radians.
 *
 * @function Phaser.Geom.Line.NormalAngle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line to calculate the angle of the normal of.
 *
 * @return {number} The angle of the normal of the line in radians.
 */
export default function NormalAngle (line: ILine): number
{
    const angle = Angle(line) - MATH_CONST.TAU;

    return Wrap(angle, -Math.PI, Math.PI);
}
