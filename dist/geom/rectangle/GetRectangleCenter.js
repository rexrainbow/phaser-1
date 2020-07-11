/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {GetRectangleCenterX as GetRectangleCenterX2} from "./GetRectangleCenterX";
import {GetRectangleCenterY as GetRectangleCenterY2} from "./GetRectangleCenterY";
import {Vec2 as Vec22} from "../../math/vec2/Vec2";
export function GetRectangleCenter(rect, out = new Vec22()) {
  return out.set(GetRectangleCenterX2(rect), GetRectangleCenterY2(rect));
}
