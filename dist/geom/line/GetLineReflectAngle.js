/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {GetLineAngle as GetLineAngle2} from "./GetLineAngle";
import {GetLineNormalAngle as GetLineNormalAngle2} from "./GetLineNormalAngle";
export function GetLineReflectAngle(lineA, lineB) {
  return 2 * GetLineNormalAngle2(lineB) - Math.PI - GetLineAngle2(lineA);
}
