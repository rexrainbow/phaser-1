/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {Rectangle as Rectangle2} from "../rectangle/Rectangle";
export function GetEllipseBounds(ellipse, out = new Rectangle2()) {
  return out.set(ellipse.left, ellipse.top, ellipse.width, ellipse.height);
}
