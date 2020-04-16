/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import ITriangle from './ITriangle';
import Circle from '../Circle/Circle';
/**
 * Finds the circumscribed circle (circumcircle) of a Triangle object.
 * The circumcircle is the circle which touches all of the triangle's vertices.
 *
 * Adapted from https://gist.github.com/mutoo/5617691
 *
 * @function Phaser.Geom.Triangle.CircumCircle
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Circle} O - [out,$return]
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to use as input.
 * @param {Phaser.Geom.Circle} [out] - An optional Circle to store the result in.
 *
 * @return {Phaser.Geom.Circle} The updated `out` Circle, or a new Circle if none was provided.
 */
export default function CircumCircle(triangle: ITriangle, out?: Circle): Circle;
//# sourceMappingURL=CircumCircle.d.ts.map