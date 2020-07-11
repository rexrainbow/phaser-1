import {Vec3 as Vec32} from "./Vec3";
export function Vec3RotateX(a, origin, angle, out = new Vec32()) {
  const {x: ax, y: ay, z: az} = a;
  const {x: bx, y: by, z: bz} = origin;
  const px = ax - bx;
  const py = ay - by;
  const pz = az - bz;
  const rx = px;
  const ry = py * Math.cos(angle) - pz * Math.sin(angle);
  const rz = py * Math.sin(angle) + pz * Math.cos(angle);
  return out.set(rx + bx, ry + by, rz + bz);
}
