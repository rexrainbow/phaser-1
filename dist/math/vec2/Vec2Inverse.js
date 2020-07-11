import {Vec2 as Vec22} from "./Vec2";
export function Vec2Inverse(a, out = new Vec22()) {
  return out.set(1 / a.x, 1 / a.y);
}
