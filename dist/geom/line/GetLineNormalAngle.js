/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {GetLineAngle as GetLineAngle2} from "./GetLineAngle";
import {MATH_CONST} from "../../math/const";
import {Wrap as Wrap2} from "../../math/Wrap";
export function GetLineNormalAngle(line) {
  const angle = GetLineAngle2(line) - MATH_CONST.HALF_PI;
  return Wrap2(angle, -Math.PI, Math.PI);
}
