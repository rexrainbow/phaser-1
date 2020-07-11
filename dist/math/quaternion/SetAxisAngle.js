import {Quaternion as Quaternion2} from "./Quaternion";
export function SetAxisAngle(axis, angle, out = new Quaternion2()) {
  const {x, y, z} = axis;
  angle *= 0.5;
  const s = Math.sin(angle);
  return out.set(x * s, y * s, z * s, Math.cos(angle));
}
