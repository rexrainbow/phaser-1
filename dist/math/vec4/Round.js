import {Vec4 as Vec42} from "./Vec4";
export function Round(a, out = new Vec42()) {
  const {x, y, z, w} = a;
  return out.set(Math.round(x), Math.round(y), Math.round(z), Math.round(w));
}
