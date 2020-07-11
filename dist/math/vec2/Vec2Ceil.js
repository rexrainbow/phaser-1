import {Vec2 as Vec22} from "./Vec2";
export function Vec2Ceil(a, out = new Vec22()) {
  return out.set(Math.ceil(a.x), Math.ceil(a.y));
}
