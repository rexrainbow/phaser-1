import {Vec4 as Vec42} from "./Vec4";
export function Negate(a, out = new Vec42()) {
  return out.set(-a.x, -a.y, -a.z, -a.w);
}
