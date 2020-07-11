import {Bezier as MathBezier} from "../Bezier";
import {Vec4 as Vec42} from "./Vec4";
export function Bezier(a, b, c, d, t, out = new Vec42()) {
  return out.set(MathBezier(t, a.x, b.x, c.x, d.x), MathBezier(t, a.y, b.y, c.y, d.y), MathBezier(t, a.z, b.z, c.z, d.z), MathBezier(t, a.w, b.w, c.w, d.w));
}
