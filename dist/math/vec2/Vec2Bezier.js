import {Bezier as Bezier2} from "../Bezier";
import {Vec2 as Vec22} from "./Vec2";
export function Vec2Bezier(a, b, c, d, t, out = new Vec22()) {
  return out.set(Bezier2(t, a.x, b.x, c.x, d.x), Bezier2(t, a.y, b.y, c.y, d.y));
}
