import {Vec4 as Vec42} from "./Vec4";
export function Abs(a, out = new Vec42()) {
  return out.set(Math.abs(a.x), Math.abs(a.y), Math.abs(a.z), Math.abs(a.w));
}
