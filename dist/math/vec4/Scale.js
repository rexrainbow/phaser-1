import {Vec4 as Vec42} from "./Vec4";
export function Scale(a, scalar, out = new Vec42()) {
  const {x, y, z, w} = a;
  return out.set(x * scalar, y * scalar, z * scalar, w * scalar);
}
