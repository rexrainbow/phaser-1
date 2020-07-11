/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {EllipseContains as EllipseContains2} from "./EllipseContains";
export function EllipseContainsPoint(ellipse, point) {
  return EllipseContains2(ellipse, point.x, point.y);
}
