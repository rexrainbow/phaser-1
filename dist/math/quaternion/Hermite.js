import {Hermite as MathHermite} from "../Hermite";
import {Quaternion as Quaternion2} from "./Quaternion";
export function Hermite(a, b, c, d, t, out = new Quaternion2()) {
  return out.set(MathHermite(t, a.x, b.x, c.x, d.x), MathHermite(t, a.y, b.y, c.y, d.y), MathHermite(t, a.z, b.z, c.z, d.z), MathHermite(t, a.w, b.w, c.w, d.w));
}
