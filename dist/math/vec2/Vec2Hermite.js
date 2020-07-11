import {Hermite as Hermite2} from "../Hermite";
import {Vec2 as Vec22} from "./Vec2";
export function Vec2Hermite(a, b, c, d, t, out = new Vec22()) {
  return out.set(Hermite2(t, a.x, b.x, c.x, d.x), Hermite2(t, a.y, b.y, c.y, d.y));
}
