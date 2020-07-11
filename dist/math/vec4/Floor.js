import {Vec4 as Vec42} from "./Vec4";
export function Floor(a, out = new Vec42()) {
  const {x, y, z, w} = a;
  return out.set(Math.floor(x), Math.floor(y), Math.floor(z), Math.floor(w));
}
