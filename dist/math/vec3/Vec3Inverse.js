import {Vec3 as Vec32} from "./Vec3";
export function Vec3Inverse(a, out = new Vec32()) {
  return out.set(1 / a.x, 1 / a.y, 1 / a.z);
}
