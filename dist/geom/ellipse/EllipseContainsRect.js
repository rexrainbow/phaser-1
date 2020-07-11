/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {EllipseContains as EllipseContains2} from "./EllipseContains";
export function EllipseContainsRect(ellipse, rect) {
  return EllipseContains2(ellipse, rect.x, rect.y) && EllipseContains2(ellipse, rect.right, rect.y) && EllipseContains2(ellipse, rect.x, rect.bottom) && EllipseContains2(ellipse, rect.right, rect.bottom);
}
