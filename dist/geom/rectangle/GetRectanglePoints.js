/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {GetRectanglePerimeter as GetRectanglePerimeter2} from "./GetRectanglePerimeter";
import {GetRectanglePoint as GetRectanglePoint2} from "./GetRectanglePoint";
export function GetRectanglePoints(rectangle, step, quantity = 0, out = []) {
  if (!quantity) {
    quantity = GetRectanglePerimeter2(rectangle) / step;
  }
  for (let i = 0; i < quantity; i++) {
    out.push(GetRectanglePoint2(rectangle, i / quantity));
  }
  return out;
}
