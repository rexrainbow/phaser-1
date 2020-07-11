/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {Vec2 as Vec22} from "../../math/vec2/Vec2";
export function GetRectangleSize(rect, out = new Vec22()) {
  return out.set(rect.width, rect.height);
}
