/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {GetLineAngle as GetLineAngle2} from "./GetLineAngle";
import {MATH_CONST} from "../../math/const";
import {Vec2 as Vec22} from "../../math/vec2/Vec2";
export function GetLineNormal(line, out = new Vec22()) {
  const a = GetLineAngle2(line) - MATH_CONST.HALF_PI;
  out.x = Math.cos(a);
  out.y = Math.sin(a);
  return out;
}
