/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {GetLineToCircle as GetLineToCircle2} from "./GetLineToCircle";
import {GetTriangleEdges as GetTriangleEdges2} from "../triangle/GetTriangleEdges";
import {TriangleToCircle as TriangleToCircle2} from "./TriangleToCircle";
export function GetTriangleToCircle(triangle, circle, out = []) {
  if (TriangleToCircle2(triangle, circle)) {
    const [lineA, lineB, lineC] = GetTriangleEdges2(triangle);
    GetLineToCircle2(lineA, circle, out);
    GetLineToCircle2(lineB, circle, out);
    GetLineToCircle2(lineC, circle, out);
  }
  return out;
}
