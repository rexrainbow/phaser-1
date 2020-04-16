/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import Vec2 from '../../math/vec2/Vec2';
/**
 * Get the midpoint of the given line.
 *
 * @function Phaser.Geom.Line.GetMidPoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Line} line - The line to get the midpoint of.
 * @param {(Phaser.Geom.Point|object)} [out] - An optional point object to store the midpoint in.
 *
 * @return {(Phaser.Geom.Point|object)} The midpoint of the Line.
 */
export default function GetMidPoint(line, out = new Vec2()) {
    out.x = (line.x1 + line.x2) / 2;
    out.y = (line.y1 + line.y2) / 2;
    return out;
}
//# sourceMappingURL=GetMidPoint.js.map