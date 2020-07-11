/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {GetTriangleCentroid as GetTriangleCentroid2} from "./GetTriangleCentroid";
import {TranslateTriangle as TranslateTriangle2} from "./TranslateTriangle";
export function CenterTriangleOn(triangle, x, y, centerFunc = GetTriangleCentroid2) {
  const center = centerFunc(triangle);
  const diffX = x - center.x;
  const diffY = y - center.y;
  return TranslateTriangle2(triangle, diffX, diffY);
}
