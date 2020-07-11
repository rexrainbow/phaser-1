import {Quaternion as Quaternion2} from "./Quaternion";
export function Conjugate(a, out = new Quaternion2()) {
  const {x, y, z, w} = a;
  return out.set(x * -1, y * -1, z * -1, w);
}
