/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {CenterRectangleOn as CenterRectangleOn2} from "./CenterRectangleOn";
import {GetRectangleCenterX as GetRectangleCenterX2} from "./GetRectangleCenterX";
import {GetRectangleCenterY as GetRectangleCenterY2} from "./GetRectangleCenterY";
export function InflateRectangle(rect, x, y) {
  const cx = GetRectangleCenterX2(rect);
  const cy = GetRectangleCenterY2(rect);
  rect.width = rect.width + x * 2;
  rect.height = rect.height + y * 2;
  return CenterRectangleOn2(rect, cx, cy);
}
