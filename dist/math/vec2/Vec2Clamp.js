import {Clamp as Clamp2} from "../Clamp";
import {Vec2 as Vec22} from "./Vec2";
export function Vec2Clamp(a, min, max, out = new Vec22()) {
  return out.set(Clamp2(a.x, min.x, max.x), Clamp2(a.y, min.y, max.y));
}
