/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {GetLineToRectangle as GetLineToRectangle2} from "./GetLineToRectangle";
import {GetRectangleEdges as GetRectangleEdges2} from "../rectangle/GetRectangleEdges";
import {RectangleToRectangle as RectangleToRectangle2} from "./RectangleToRectangle";
export function GetRectangleToRectangle(rectA, rectB, out = []) {
  if (RectangleToRectangle2(rectA, rectB)) {
    const [lineA, lineB, lineC, lineD] = GetRectangleEdges2(rectA);
    GetLineToRectangle2(lineA, rectB, out);
    GetLineToRectangle2(lineB, rectB, out);
    GetLineToRectangle2(lineC, rectB, out);
    GetLineToRectangle2(lineD, rectB, out);
  }
  return out;
}
