/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {Vec2 as Vec22} from "../../math/vec2/Vec2";
export function DecomposeRectangle(rect, out = []) {
  out.push(new Vec22(rect.x, rect.y), new Vec22(rect.right, rect.y), new Vec22(rect.right, rect.bottom), new Vec22(rect.x, rect.bottom));
  return out;
}
