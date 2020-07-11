import {Vec2 as Vec22} from "./Vec2";
export function Vec2Min(a, b, out = new Vec22()) {
  const {x: ax, y: ay} = a;
  const {x: bx, y: by} = b;
  return out.set(Math.min(ax, bx), Math.min(ay, by));
}
