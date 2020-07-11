/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {GetTriangleEdges as GetTriangleEdges2} from "../triangle/GetTriangleEdges";
import {GetTriangleToLine as GetTriangleToLine2} from "./GetTriangleToLine";
import {TriangleToTriangle as TriangleToTriangle2} from "./TriangleToTriangle";
export function GetTriangleToTriangle(triangleA, triangleB, out = []) {
  if (TriangleToTriangle2(triangleA, triangleB)) {
    const [lineA, lineB, lineC] = GetTriangleEdges2(triangleB);
    GetTriangleToLine2(triangleA, lineA, out);
    GetTriangleToLine2(triangleA, lineB, out);
    GetTriangleToLine2(triangleA, lineC, out);
  }
  return out;
}
