import {Quaternion as Quaternion2} from "./Quaternion";
export function MultiplyByFloats(a, x, y, z, w, out = new Quaternion2()) {
  return out.set(a.x * x, a.y * y, a.z * z, a.w * w);
}
