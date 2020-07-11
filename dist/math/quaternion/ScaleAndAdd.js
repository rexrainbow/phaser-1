import {Quaternion as Quaternion2} from "./Quaternion";
export function ScaleAndAdd(a, b, scalar, out = new Quaternion2()) {
  return out.set(a.x + b.x * scalar, a.y + b.y * scalar, a.z + b.z * scalar, a.w + b.w * scalar);
}
