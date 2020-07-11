/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {TriangleContains as TriangleContains2} from "./TriangleContains";
import {Vec2 as Vec22} from "../../math/vec2/Vec2";
export function TriangleContainsPoints(triangle, points, returnFirst = false, out = []) {
  let skip = false;
  points.forEach((point) => {
    if (skip) {
      return;
    }
    const {x, y} = point;
    if (TriangleContains2(triangle, x, y)) {
      out.push(new Vec22(x, y));
      if (returnFirst) {
        skip = true;
      }
    }
  });
  return out;
}
