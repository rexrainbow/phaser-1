import {Quaternion as Quaternion2} from "./Quaternion";
export function Add(a, b, out = new Quaternion2()) {
  return out.set(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);
}
