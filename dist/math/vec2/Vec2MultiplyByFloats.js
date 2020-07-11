import {Vec2 as Vec22} from "./Vec2";
export function Vec2MultiplyByFloats(a, x, y, out = new Vec22()) {
  return out.set(a.x * x, a.y * y);
}
