/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {GetLineAngle as GetLineAngle2} from "./GetLineAngle";
import {MATH_CONST} from "../../math/const";
export function GetLineNormalY(line) {
  return Math.sin(GetLineAngle2(line) - MATH_CONST.HALF_PI);
}
