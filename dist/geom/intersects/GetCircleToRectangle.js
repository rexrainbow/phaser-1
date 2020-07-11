/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {CircleToRectangle as CircleToRectangle2} from "./CircleToRectangle";
import {GetLineToCircle as GetLineToCircle2} from "./GetLineToCircle";
import {GetRectangleEdges as GetRectangleEdges2} from "../rectangle/GetRectangleEdges";
export function GetCircleToRectangle(circle, rect, out = []) {
  if (CircleToRectangle2(circle, rect)) {
    const [line1, line2, line3, line4] = GetRectangleEdges2(rect);
    GetLineToCircle2(line1, circle, out);
    GetLineToCircle2(line2, circle, out);
    GetLineToCircle2(line3, circle, out);
    GetLineToCircle2(line4, circle, out);
  }
  return out;
}
