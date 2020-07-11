/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {DecomposeRectangle as DecomposeRectangle2} from "../rectangle/DecomposeRectangle";
import {GetRectangleEdges as GetRectangleEdges2} from "../rectangle/GetRectangleEdges";
import {GetTriangleEdges as GetTriangleEdges2} from "../triangle/GetTriangleEdges";
import {LineToLine as LineToLine2} from "./LineToLine";
import {RectangleContains as RectangleContains2} from "../rectangle/RectangleContains";
import {TriangleContainsPoints as TriangleContainsPoints2} from "../triangle/TriangleContainsPoints";
export function RectangleToTriangle(rect, triangle) {
  if (triangle.left > rect.right || triangle.right < rect.x || triangle.top > rect.bottom || triangle.bottom < rect.y) {
    return false;
  }
  const [triA, triB, triC] = GetTriangleEdges2(triangle);
  if (RectangleContains2(rect, triA.x1, triA.y1) || RectangleContains2(rect, triA.x2, triA.y2)) {
    return true;
  }
  if (RectangleContains2(rect, triB.x1, triB.y1) || RectangleContains2(rect, triB.x2, triB.y2)) {
    return true;
  }
  if (RectangleContains2(rect, triC.x1, triC.y1) || RectangleContains2(rect, triC.x2, triC.y2)) {
    return true;
  }
  const [rectA, rectB, rectC, rectD] = GetRectangleEdges2(rect);
  if (LineToLine2(triA, rectA) || LineToLine2(triA, rectB) || LineToLine2(triA, rectC) || LineToLine2(triA, rectD)) {
    return true;
  }
  if (LineToLine2(triB, rectA) || LineToLine2(triB, rectB) || LineToLine2(triB, rectC) || LineToLine2(triB, rectD)) {
    return true;
  }
  if (LineToLine2(triC, rectA) || LineToLine2(triC, rectB) || LineToLine2(triC, rectC) || LineToLine2(triC, rectD)) {
    return true;
  }
  const within = TriangleContainsPoints2(triangle, DecomposeRectangle2(rect), true);
  return within.length > 0;
}
