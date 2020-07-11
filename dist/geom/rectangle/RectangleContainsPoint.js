/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {RectangleContains as RectangleContains2} from "./RectangleContains";
export function RectangleContainsPoint(rect, point) {
  return RectangleContains2(rect, point.x, point.y);
}
