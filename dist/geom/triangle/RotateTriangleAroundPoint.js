/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {RotateTriangleAround as RotateTriangleAround2} from "./RotateTriangleAround";
export function RotateTriangleAroundPoint(triangle, point, angle) {
  return RotateTriangleAround2(triangle, point.x, point.y, angle);
}
