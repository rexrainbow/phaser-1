import {Vec3 as Vec32} from "./Vec3";
export function Vec3Lerp(a, b, t, out = new Vec32()) {
  const {x, y, z} = a;
  return out.set(x + t * (b.x - x), y + t * (b.y - y), z + t * (b.z - z));
}
