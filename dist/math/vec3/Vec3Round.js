import {Vec3 as Vec32} from "./Vec3";
export function Vec3Round(a, out = new Vec32()) {
  return out.set(Math.round(a.x), Math.round(a.y), Math.round(a.z));
}
