import {Quaternion as Quaternion2} from "./Quaternion";
export function RotateY(a, angle, out = new Quaternion2()) {
  angle *= 0.5;
  const {x, y, z, w} = a;
  const by = Math.sin(angle);
  const bw = Math.cos(angle);
  return out.set(x * bw - z * by, y * bw + w * by, z * bw + x * by, w * bw - y * by);
}
