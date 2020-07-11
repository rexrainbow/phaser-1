import {Hermite as MathHermite} from "../Hermite";
import {Vec4 as Vec42} from "./Vec4";
export function Hermite(a, b, c, d, t, out = new Vec42()) {
  return out.set(MathHermite(t, a.x, b.x, c.x, d.x), MathHermite(t, a.y, b.y, c.y, d.y), MathHermite(t, a.z, b.z, c.z, d.z), MathHermite(t, a.w, b.w, c.w, d.w));
}
