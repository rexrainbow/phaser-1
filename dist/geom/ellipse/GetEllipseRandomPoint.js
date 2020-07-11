/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {Vec2 as Vec22} from "../../math/vec2/Vec2";
export function GetEllipseRandomPoint(ellipse, out = new Vec22()) {
  const p = Math.random() * Math.PI * 2;
  const s = Math.sqrt(Math.random());
  out.x = ellipse.x + s * Math.cos(p) * ellipse.width / 2;
  out.y = ellipse.y + s * Math.sin(p) * ellipse.height / 2;
  return out;
}
