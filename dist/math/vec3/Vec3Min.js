import {Vec3 as Vec32} from "./Vec3";
export function Vec3Min(a, b, out = new Vec32()) {
  const {x: ax, y: ay, z: az} = a;
  const {x: bx, y: by, z: bz} = b;
  return out.set(Math.min(ax, bx), Math.min(ay, by), Math.min(az, bz));
}
