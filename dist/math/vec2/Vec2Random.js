import {Vec2 as Vec22} from "./Vec2";
export function Vec2Random(a, scale = 1, out = new Vec22()) {
  const r = Math.random() * 2 * Math.PI;
  return out.set(Math.cos(r) * scale, Math.sin(r) * scale);
}
