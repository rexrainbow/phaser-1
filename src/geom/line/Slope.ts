/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import ILine from './ILine';

/**
 * Calculate the slope of the given line.
 *
 * @function Phaser.Geom.Line.Slope
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line to calculate the slope of.
 *
 * @return {number} The slope of the line.
 */
export default function Slope (line: ILine): number
{
    const { x1, y1, x2, y2 } = line;

    return (y2 - y1) / (x2 - x1);
}
