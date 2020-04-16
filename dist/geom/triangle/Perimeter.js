/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import Length from '../line/Length';
import GetEdges from './GetEdges';
/**
 * Gets the length of the perimeter of the given triangle.
 * Calculated by adding together the length of each of the three sides.
 *
 * @function Phaser.Geom.Triangle.Perimeter
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to get the length from.
 *
 * @return {number} The length of the Triangle.
 */
export default function Perimeter(triangle) {
    const [line1, line2, line3] = GetEdges(triangle);
    return (Length(line1) + Length(line2) + Length(line3));
}
//# sourceMappingURL=Perimeter.js.map