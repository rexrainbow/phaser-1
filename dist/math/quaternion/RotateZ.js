import {Quaternion as Quaternion2} from "./Quaternion";
export function RotateZ(a, angle, out = new Quaternion2()) {
  angle *= 0.5;
  const {x, y, z, w} = a;
  const bz = Math.sin(angle);
  const bw = Math.cos(angle);
  return out.set(x * bw + y * bz, y * bw - x * bz, z * bw + w * bz, w * bw - z * bz);
}
