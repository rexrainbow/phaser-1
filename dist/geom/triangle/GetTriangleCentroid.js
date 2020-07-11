/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {Vec2 as Vec22} from "../../math/vec2/Vec2";
export function GetTriangleCentroid(triangle, out = new Vec22()) {
  return out.set((triangle.x1 + triangle.x2 + triangle.x3) / 3, (triangle.y1 + triangle.y2 + triangle.y3) / 3);
}
