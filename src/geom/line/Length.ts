/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ILine } from './ILine';

/**
 * Calculate the length of the given line.
 *
 * @function Phaser.Geom.Line.Length
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line to calculate the length of.
 *
 * @return {number} The length of the line.
 */
export function Length (line: ILine): number
{
    const { x1, y1, x2, y2 } = line;

    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}
