import {Vec4 as Vec42} from "./Vec4";
export function Fract(a, out = new Vec42()) {
  return out.set(a.x - Math.floor(a.x), a.y - Math.floor(a.y), a.z - Math.floor(a.z), a.w - Math.floor(a.w));
}
