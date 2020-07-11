import {Quaternion as Quaternion2} from "./Quaternion";
export function AddScalar(a, scalar, out = new Quaternion2()) {
  return out.set(a.x + scalar, a.y + scalar, a.z + scalar, a.w + scalar);
}
