/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {GetLineLength as GetLineLength2} from "../line/GetLineLength";
import {GetTriangleEdges as GetTriangleEdges2} from "./GetTriangleEdges";
export function GetTrianglePerimeter(triangle) {
  const [line1, line2, line3] = GetTriangleEdges2(triangle);
  return GetLineLength2(line1) + GetLineLength2(line2) + GetLineLength2(line3);
}
