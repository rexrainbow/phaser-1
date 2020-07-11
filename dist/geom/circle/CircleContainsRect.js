/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {CircleContains as CircleContains2} from "./CircleContains";
export function CircleContainsRect(circle, rect) {
  return CircleContains2(circle, rect.x, rect.y) && CircleContains2(circle, rect.right, rect.y) && CircleContains2(circle, rect.x, rect.bottom) && CircleContains2(circle, rect.right, rect.bottom);
}
