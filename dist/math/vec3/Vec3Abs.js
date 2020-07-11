import {Vec3 as Vec32} from "./Vec3";
export function Vec3Abs(a, out = new Vec32()) {
  return out.set(Math.abs(a.x), Math.abs(a.y), Math.abs(a.z));
}
