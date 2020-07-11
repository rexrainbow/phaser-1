/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {GetTriangleEdges as GetTriangleEdges2} from "../triangle/GetTriangleEdges";
import {LineToCircle as LineToCircle2} from "./LineToCircle";
import {TriangleContains as TriangleContains2} from "../triangle/TriangleContains";
export function TriangleToCircle(triangle, circle) {
  if (triangle.left > circle.right || triangle.right < circle.left || triangle.top > circle.bottom || triangle.bottom < circle.top) {
    return false;
  }
  if (TriangleContains2(triangle, circle.x, circle.y)) {
    return true;
  }
  const [line1, line2, line3] = GetTriangleEdges2(triangle);
  return LineToCircle2(line1, circle) || LineToCircle2(line2, circle) || LineToCircle2(line3, circle);
}
