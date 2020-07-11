/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {DegToRad as DegToRad2} from "../../math/DegToRad";
import {GetRectangleCenterX as GetRectangleCenterX2} from "./GetRectangleCenterX";
import {GetRectangleCenterY as GetRectangleCenterY2} from "./GetRectangleCenterY";
import {Vec2 as Vec22} from "../../math/vec2/Vec2";
export function GetRectanglePerimeterPoint(rectangle, angle, out = new Vec22()) {
  angle = DegToRad2(angle);
  const s = Math.sin(angle);
  const c = Math.cos(angle);
  let dx = c > 0 ? rectangle.width / 2 : rectangle.width / -2;
  let dy = s > 0 ? rectangle.height / 2 : rectangle.height / -2;
  if (Math.abs(dx * s) < Math.abs(dy * c)) {
    dy = dx * s / c;
  } else {
    dx = dy * c / s;
  }
  return out.set(dx + GetRectangleCenterX2(rectangle), dy + GetRectangleCenterY2(rectangle));
}
