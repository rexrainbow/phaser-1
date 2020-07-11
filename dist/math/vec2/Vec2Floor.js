import {Vec2 as Vec22} from "./Vec2";
export function Vec2Floor(a, out = new Vec22()) {
  return out.set(Math.floor(a.x), Math.floor(a.y));
}
