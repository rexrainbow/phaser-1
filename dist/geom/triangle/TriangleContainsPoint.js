/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {TriangleContains as TriangleContains2} from "./TriangleContains";
export function TriangleContainsPoint(triangle, point) {
  return TriangleContains2(triangle, point.x, point.y);
}
