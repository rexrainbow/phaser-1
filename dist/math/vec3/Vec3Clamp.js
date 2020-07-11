import {Clamp as Clamp2} from "../Clamp";
import {Vec3 as Vec32} from "./Vec3";
export function Vec3Clamp(a, min, max, out = new Vec32()) {
  return out.set(Clamp2(a.x, min.x, max.x), Clamp2(a.y, min.y, max.y), Clamp2(a.z, min.z, max.z));
}
