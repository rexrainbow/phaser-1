import {Vec3 as Vec32} from "./Vec3";
export function Vec3MultiplyByFloats(a, x, y, z, out = new Vec32()) {
  return out.set(a.x * x, a.y * y, a.z * z);
}
