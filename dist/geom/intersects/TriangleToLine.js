/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {GetTriangleEdges as GetTriangleEdges2} from "../triangle/GetTriangleEdges";
import {LineToLine as LineToLine2} from "./LineToLine";
import {TriangleContains as TriangleContains2} from "../triangle/TriangleContains";
export function TriangleToLine(triangle, line) {
  const {x1, y1, x2, y2} = line;
  if (TriangleContains2(triangle, x1, y1) || TriangleContains2(triangle, x2, y2)) {
    return true;
  }
  const [line1, line2, line3] = GetTriangleEdges2(triangle);
  return LineToLine2(line1, line) || LineToLine2(line2, line) || LineToLine2(line3, line);
}
