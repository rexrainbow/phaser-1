/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ILine } from './ILine';

/**
 * Calculate the perpendicular slope of the given line.
 *
 * @function Phaser.Geom.Line.PerpSlope
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line to calculate the perpendicular slope of.
 *
 * @return {number} The perpendicular slope of the line.
 */
export function PerpSlope (line: ILine): number
{
    const { x1, y1, x2, y2 } = line;

    return -((x2 - x1) / (y2 - y1));
}
