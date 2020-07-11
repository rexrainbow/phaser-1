import {Vec4 as Vec42} from "./Vec4";
export function AddScalar(a, scalar, out = new Vec42()) {
  return out.set(a.x + scalar, a.y + scalar, a.z + scalar, a.w + scalar);
}
