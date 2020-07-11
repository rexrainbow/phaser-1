import {Vec4 as Vec42} from "./Vec4";
export function MultiplyByFloats(a, x, y, z, w, out = new Vec42()) {
  return out.set(a.x * x, a.y * y, a.z * z, a.w * w);
}
