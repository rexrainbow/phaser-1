import {Vec3 as Vec32} from "./Vec3";
export function Vec3Add(a, b, out = new Vec32()) {
  return out.set(a.x + b.x, a.y + b.y, a.z + b.z);
}
