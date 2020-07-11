/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {GetVec2Distance as GetVec2Distance2} from "../../math/vec2/GetVec2Distance";
export function CircleToCircle(circleA, circleB) {
  return GetVec2Distance2(circleA, circleB) <= circleA.radius + circleB.radius;
}
