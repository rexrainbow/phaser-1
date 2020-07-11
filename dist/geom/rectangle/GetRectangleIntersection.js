/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {Rectangle as Rectangle2} from "./Rectangle";
import {RectangleToRectangle as RectangleToRectangle2} from "../intersects/RectangleToRectangle";
export function GetRectangleIntersection(rectA, rectB, out = new Rectangle2()) {
  if (RectangleToRectangle2(rectA, rectB)) {
    out.set(Math.max(rectA.x, rectB.x), Math.max(rectA.y, rectB.y), Math.min(rectA.right, rectB.right) - out.x, Math.min(rectA.bottom, rectB.bottom) - out.y);
  } else {
    out.set();
  }
  return out;
}
