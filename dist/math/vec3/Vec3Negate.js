import {Vec3 as Vec32} from "./Vec3";
export function Vec3Negate(a, out = new Vec32()) {
  return out.set(-a.x, -a.y, -a.z);
}
