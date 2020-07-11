import {Vec4 as Vec42} from "./Vec4";
export function Subtract(a, b, out = new Vec42()) {
  return out.set(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
}
