/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {RotateLineAround as RotateLineAround2} from "./RotateLineAround";
export function RotateLine(line, angle) {
  const x = (line.x1 + line.x2) / 2;
  const y = (line.y1 + line.y2) / 2;
  return RotateLineAround2(line, x, y, angle);
}
