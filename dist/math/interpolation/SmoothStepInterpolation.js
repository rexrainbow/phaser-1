/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {SmoothStep as SmoothStep2} from "../SmoothStep";
export function SmoothStepInterpolation(t, min, max) {
  return min + (max - min) * SmoothStep2(t, 0, 1);
}
