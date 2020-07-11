import {Vec2 as Vec22} from "./Vec2";
export function Vec2Scale(a, scalar, out = new Vec22()) {
  return out.set(a.x * scalar, a.y * scalar);
}
