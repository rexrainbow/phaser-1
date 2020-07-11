/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {GetRectangleEdges as GetRectangleEdges2} from "../rectangle/GetRectangleEdges";
import {LineToLine as LineToLine2} from "./LineToLine";
import {LineToRectangle as LineToRectangle2} from "./LineToRectangle";
import {Vec2 as Vec22} from "../../math/vec2/Vec2";
export function GetLineToRectangle(line, rect, out = []) {
  if (LineToRectangle2(line, rect)) {
    const [lineA, lineB, lineC, lineD] = GetRectangleEdges2(rect);
    const points = [new Vec22(), new Vec22(), new Vec22(), new Vec22()];
    const results = [
      LineToLine2(lineA, line, points[0]),
      LineToLine2(lineB, line, points[1]),
      LineToLine2(lineC, line, points[2]),
      LineToLine2(lineD, line, points[3])
    ];
    for (let i = 0; i < results.length; i++) {
      if (results[i]) {
        out.push(points[i]);
      }
    }
  }
  return out;
}
