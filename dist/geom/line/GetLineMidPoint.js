/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {Vec2 as Vec22} from "../../math/vec2/Vec2";
export function GetLineMidPoint(line, out = new Vec22()) {
  out.x = (line.x1 + line.x2) / 2;
  out.y = (line.y1 + line.y2) / 2;
  return out;
}
