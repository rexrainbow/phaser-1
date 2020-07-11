/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {GetTriangleEdges as GetTriangleEdges2} from "../triangle/GetTriangleEdges";
import {LineToLine as LineToLine2} from "./LineToLine";
import {TriangleToLine as TriangleToLine2} from "./TriangleToLine";
import {Vec2 as Vec22} from "../../math/vec2/Vec2";
export function GetTriangleToLine(triangle, line, out = []) {
  if (TriangleToLine2(triangle, line)) {
    const [lineA, lineB, lineC] = GetTriangleEdges2(triangle);
    const points = [new Vec22(), new Vec22(), new Vec22()];
    const results = [
      LineToLine2(lineA, line, points[0]),
      LineToLine2(lineB, line, points[1]),
      LineToLine2(lineC, line, points[2])
    ];
    for (let i = 0; i < results.length; i++) {
      if (results[i]) {
        out.push(points[i]);
      }
    }
  }
  return out;
}
