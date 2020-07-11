/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {GetRectangleAspectRatio as GetRectangleAspectRatio2} from "./GetRectangleAspectRatio";
import {GetRectangleCenterX as GetRectangleCenterX2} from "./GetRectangleCenterX";
import {GetRectangleCenterY as GetRectangleCenterY2} from "./GetRectangleCenterY";
export function FitRectangleInside(target, source) {
  const ratio = GetRectangleAspectRatio2(target);
  let width = source.width;
  let height = source.height;
  if (ratio < GetRectangleAspectRatio2(source)) {
    width = source.height * ratio;
  } else {
    height = source.width / ratio;
  }
  return target.set(GetRectangleCenterX2(source) - target.width / 2, GetRectangleCenterY2(source) - target.height / 2, width, height);
}
