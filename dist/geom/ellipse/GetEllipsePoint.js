/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {FromPercent as FromPercent2} from "../../math/FromPercent";
import {GetEllipseCircumferencePoint as GetEllipseCircumferencePoint2} from "./GetEllipseCircumferencePoint";
import {MATH_CONST} from "../../math/const";
import {Vec2 as Vec22} from "../../math/vec2/Vec2";
export function GetEllipsePoint(ellipse, position, out = new Vec22()) {
  const angle = FromPercent2(position, 0, MATH_CONST.PI2);
  return GetEllipseCircumferencePoint2(ellipse, angle, out);
}
