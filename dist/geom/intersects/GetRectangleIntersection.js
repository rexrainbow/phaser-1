/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {Rectangle as Rectangle2} from "../rectangle/Rectangle";
import {RectangleToRectangle as RectangleToRectangle2} from "./RectangleToRectangle";
export function GetRectangleIntersection(rectA, rectB, out = new Rectangle2()) {
  if (RectangleToRectangle2(rectA, rectB)) {
    const x = Math.max(rectA.x, rectB.x);
    const y = Math.max(rectA.y, rectB.y);
    return out.set(x, y, Math.min(rectA.right, rectB.right) - x, Math.min(rectA.bottom, rectB.bottom) - y);
  }
}
