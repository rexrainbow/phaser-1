/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {GetTriangleInCenter as GetTriangleInCenter2} from "./GetTriangleInCenter";
import {RotateTriangleAround as RotateTriangleAround2} from "./RotateTriangleAround";
export function RotateTriangle(triangle, angle) {
  const point = GetTriangleInCenter2(triangle);
  return RotateTriangleAround2(triangle, point.x, point.y, angle);
}
