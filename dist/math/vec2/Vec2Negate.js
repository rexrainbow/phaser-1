import {Vec2 as Vec22} from "./Vec2";
export function Vec2Negate(a, out = new Vec22()) {
  return out.set(-a.x, -a.y);
}
