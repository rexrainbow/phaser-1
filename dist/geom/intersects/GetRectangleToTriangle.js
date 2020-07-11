/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {GetLineToRectangle as GetLineToRectangle2} from "./GetLineToRectangle";
import {GetTriangleEdges as GetTriangleEdges2} from "../triangle/GetTriangleEdges";
import {RectangleToTriangle as RectangleToTriangle2} from "./RectangleToTriangle";
export function GetRectangleToTriangle(rect, triangle, out = []) {
  if (RectangleToTriangle2(rect, triangle)) {
    const [lineA, lineB, lineC] = GetTriangleEdges2(triangle);
    GetLineToRectangle2(lineA, rect, out);
    GetLineToRectangle2(lineB, rect, out);
    GetLineToRectangle2(lineC, rect, out);
  }
  return out;
}
