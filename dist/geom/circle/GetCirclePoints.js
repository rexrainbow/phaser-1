/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {FromPercent as FromPercent2} from "../../math/FromPercent";
import {GetCircleCircumference as GetCircleCircumference2} from "./GetCircleCircumference";
import {GetCircleCircumferencePoint as GetCircleCircumferencePoint2} from "./GetCircleCircumferencePoint";
import {MATH_CONST} from "../../math/const";
export function GetCirclePoints(circle, step, quantity = 0, out = []) {
  if (!quantity) {
    quantity = GetCircleCircumference2(circle) / step;
  }
  for (let i = 0; i < quantity; i++) {
    const angle = FromPercent2(i / quantity, 0, MATH_CONST.PI2);
    out.push(GetCircleCircumferencePoint2(circle, angle));
  }
  return out;
}
