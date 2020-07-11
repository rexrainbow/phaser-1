import {Clamp as Clamp2} from "../Clamp";
import {Vec3 as Vec32} from "./Vec3";
export function Vec3ClampScalar(a, min, max, out = new Vec32()) {
  return out.set(Clamp2(a.x, min, max), Clamp2(a.y, min, max), Clamp2(a.z, min, max));
}
