import {Vec4 as Vec42} from "./Vec4";
export function Ceil(a, out = new Vec42()) {
  const {x, y, z, w} = a;
  return out.set(Math.ceil(x), Math.ceil(y), Math.ceil(z), Math.ceil(w));
}
