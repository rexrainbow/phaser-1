import {Quaternion as Quaternion2} from "./Quaternion";
export function SubtractScalar(a, scalar, out = new Quaternion2()) {
  const {x, y, z, w} = a;
  return out.set(x - scalar, y - scalar, z - scalar, w - scalar);
}
