import {Vec3 as Vec32} from "./Vec3";
export function Vec3Normalize(a, out = new Vec32()) {
  const {x, y, z} = a;
  let len = x * x + y * y + z * z;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }
  return out.set(x * len, y * len, z * len);
}
