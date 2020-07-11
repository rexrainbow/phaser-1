import {Vec2 as Vec22} from "./Vec2";
export function Vec2Round(a, out = new Vec22()) {
  return out.set(Math.round(a.x), Math.round(a.y));
}
