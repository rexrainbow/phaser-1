/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {RotateLineAround as RotateLineAround2} from "./RotateLineAround";
export function RotateLineAroundPoint(line, point, angle) {
  return RotateLineAround2(line, point.x, point.y, angle);
}
