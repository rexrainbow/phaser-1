/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {FromPercent as FromPercent2} from "../../math/FromPercent";
import {GetEllipseCircumference as GetEllipseCircumference2} from "./GetEllipseCircumference";
import {GetEllipseCircumferencePoint as GetEllipseCircumferencePoint2} from "./GetEllipseCircumferencePoint";
import {MATH_CONST} from "../../math/const";
export function GetEllipsePoints(ellipse, step, quantity = 0, out = []) {
  if (!quantity) {
    quantity = GetEllipseCircumference2(ellipse) / step;
  }
  for (let i = 0; i < quantity; i++) {
    const angle = FromPercent2(i / quantity, 0, MATH_CONST.PI2);
    out.push(GetEllipseCircumferencePoint2(ellipse, angle));
  }
  return out;
}
