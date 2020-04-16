/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import Contains from './Contains';
import IRectangle from './IRectangle';
import IVec2 from '../../math/vec2/IVec2';

/**
 * Determines whether the specified point is contained within the rectangular region defined by this Rectangle object.
 *
 * @function Phaser.Geom.Rectangle.ContainsVec2
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle object.
 * @param {Phaser.Geom.Point} point - The point object to be checked. Can be a Phaser Point object or any object with x and y values.
 *
 * @return {boolean} A value of true if the Rectangle object contains the specified point, otherwise false.
 */
export default function ContainsVec2 (rect: IRectangle, vec2: IVec2): boolean
{
    return Contains(rect, vec2.x, vec2.y);
}
