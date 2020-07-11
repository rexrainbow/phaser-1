import {Bezier as Bezier2} from "../Bezier";
import {Vec3 as Vec32} from "./Vec3";
export function Vec3Bezier(a, b, c, d, t, out = new Vec32()) {
  return out.set(Bezier2(t, a.x, b.x, c.x, d.x), Bezier2(t, a.y, b.y, c.y, d.y), Bezier2(t, a.z, b.z, c.z, d.z));
}
