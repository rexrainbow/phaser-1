import {Vec2 as Vec22} from "./Vec2";
import {Vec2FromTransform as Vec2FromTransform2} from "./Vec2FromTransform";
export function Vec2Transform(v, positionX, positionY, rotation, scaleX, scaleY, out = new Vec22()) {
  return Vec2FromTransform2(v.x, v.y, positionX, positionY, rotation, scaleX, scaleY, out);
}
