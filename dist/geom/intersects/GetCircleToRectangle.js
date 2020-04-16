/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import GetLineToCircle from './GetLineToCircle';
import CircleToRectangle from './CircleToRectangle';
import GetEdges from '../Rectangle/GetEdges';
/**
 * Checks for intersection between a circle and a rectangle,
 * and returns the intersection points as a Point object array.
 *
 * @function Phaser.Geom.Intersects.GetCircleToRectangle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Circle} circle - The circle to be checked.
 * @param {Phaser.Geom.Rectangle} rect - The rectangle to be checked.
 * @param {array} [out] - An optional array in which to store the points of intersection.
 *
 * @return {array} An array with the points of intersection if objects intersect, otherwise an empty array.
 */
export default function GetCircleToRectangle(circle, rect, out = []) {
    if (CircleToRectangle(circle, rect)) {
        const [line1, line2, line3, line4] = GetEdges(rect);
        GetLineToCircle(line1, circle, out);
        GetLineToCircle(line2, circle, out);
        GetLineToCircle(line3, circle, out);
        GetLineToCircle(line4, circle, out);
    }
    return out;
}
//# sourceMappingURL=GetCircleToRectangle.js.map