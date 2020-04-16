/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import Vec2 from '../../math/vec2/Vec2';
/**
 * Returns a random Point from within the area of the given Triangle.
 *
 * @function Phaser.Geom.Triangle.Random
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to get a random point from.
 * @param {Phaser.Geom.Point} [out] - The Point object to store the position in. If not given, a new Point instance is created.
 *
 * @return {Phaser.Geom.Point} A Point object holding the coordinates of a random position within the Triangle.
 */
export default function Random(triangle, out = new Vec2()) {
    const { x1, y1, x2, y2, x3, y3 } = triangle;
    //  Basis vectors
    const ux = x2 - x1;
    const uy = y2 - y1;
    const vx = x3 - x1;
    const vy = y3 - y1;
    //  Random point within the unit square
    let r = Math.random();
    let s = Math.random();
    //  Point outside the triangle? Remap it.
    if (r + s >= 1) {
        r = 1 - r;
        s = 1 - s;
    }
    return out.set(x1 + ((ux * r) + (vx * s)), y1 + ((uy * r) + (vy * s)));
}
//# sourceMappingURL=Random.js.map