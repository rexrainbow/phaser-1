/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
/**
 * Calculate the height of the given line.
 *
 * @function Phaser.Geom.Line.Height
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The line to calculate the height of.
 *
 * @return {number} The height of the line.
 */
export default function Height(line) {
    return Math.abs(line.y1 - line.y2);
}
//# sourceMappingURL=Height.js.map