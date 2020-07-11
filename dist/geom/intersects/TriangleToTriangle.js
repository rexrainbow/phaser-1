/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {DecomposeTriangle as DecomposeTriangle2} from "../triangle/DecomposeTriangle";
import {GetTriangleEdges as GetTriangleEdges2} from "../triangle/GetTriangleEdges";
import {LineToLine as LineToLine2} from "./LineToLine";
import {TriangleContainsPoints as TriangleContainsPoints2} from "../triangle/TriangleContainsPoints";
export function TriangleToTriangle(triangleA, triangleB) {
  if (triangleA.left > triangleB.right || triangleA.right < triangleB.left || triangleA.top > triangleB.bottom || triangleA.bottom < triangleB.top) {
    return false;
  }
  const [lineAA, lineAB, lineAC] = GetTriangleEdges2(triangleA);
  const [lineBA, lineBB, lineBC] = GetTriangleEdges2(triangleB);
  if (LineToLine2(lineAA, lineBA) || LineToLine2(lineAA, lineBB) || LineToLine2(lineAA, lineBC) || LineToLine2(lineAB, lineBA) || LineToLine2(lineAB, lineBB) || LineToLine2(lineAB, lineBC) || LineToLine2(lineAC, lineBA) || LineToLine2(lineAC, lineBB) || LineToLine2(lineAC, lineBC)) {
    return true;
  }
  const withinA = TriangleContainsPoints2(triangleB, DecomposeTriangle2(triangleA), true);
  if (withinA.length > 0) {
    return true;
  }
  const withinB = TriangleContainsPoints2(triangleA, DecomposeTriangle2(triangleB), true);
  return withinB.length > 0;
}
