import {Vec3 as Vec32} from "./Vec3";
export function Vec3CrossNormalize(a, b, out = new Vec32()) {
  const {x: ax, y: ay, z: az} = a;
  const {x: bx, y: by, z: bz} = b;
  const x = ay * bz - az * by;
  const y = az * bx - ax * bz;
  const z = ax * by - ay * bx;
  let len = x * x + y * y + z * z;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }
  return out.set(x * len, y * len, z * len);
}
