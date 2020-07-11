import {Vec3 as Vec32} from "./Vec3";
export function Vec3Max(a, b, out = new Vec32()) {
  const {x: ax, y: ay, z: az} = a;
  const {x: bx, y: by, z: bz} = b;
  return out.set(Math.max(ax, bx), Math.max(ay, by), Math.max(az, bz));
}
