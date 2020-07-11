import {Clamp as Clamp2} from "../Clamp";
import {Vec2 as Vec22} from "./Vec2";
export function Vec2ClampScalar(a, min, max, out = new Vec22()) {
  return out.set(Clamp2(a.x, min, max), Clamp2(a.y, min, max));
}
