/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {Vec2 as Vec22} from "../../math/vec2/Vec2";
export function DecomposeTriangle(triangle, out = []) {
  const {x1, y1, x2, y2, x3, y3} = triangle;
  out.push(new Vec22(x1, y1), new Vec22(x2, y2), new Vec22(x3, y3));
  return out;
}
