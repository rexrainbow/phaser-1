import {Vec3 as Vec32} from "./Vec3";
export function Vec3SubtractScalar(a, scalar, out = new Vec32()) {
  return out.set(a.x - scalar, a.y - scalar, a.z - scalar);
}
