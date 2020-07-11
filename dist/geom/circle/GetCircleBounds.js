/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {Rectangle as Rectangle2} from "../rectangle/Rectangle";
export function GetCircleBounds(circle, out = new Rectangle2()) {
  return out.set(circle.left, circle.top, circle.diameter, circle.diameter);
}
