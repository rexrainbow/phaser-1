import {Quaternion as Quaternion2} from "./Quaternion";
export function RotateX(a, angle, out = new Quaternion2()) {
  angle *= 0.5;
  const {x, y, z, w} = a;
  const bx = Math.sin(angle);
  const bw = Math.cos(angle);
  return out.set(x * bw + w * bx, y * bw + z * bx, z * bw - y * bx, w * bw - x * bx);
}
