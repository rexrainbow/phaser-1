/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {Triangle as Triangle2} from "./Triangle";
export function CloneTriangle(source) {
  const {x1, y1, x2, y2, x3, y3} = source;
  return new Triangle2(x1, y1, x2, y2, x3, y3);
}
