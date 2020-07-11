/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {Circle as Circle2} from "./Circle";
export function CloneCircle(source) {
  return new Circle2(source.x, source.y, source.radius);
}
