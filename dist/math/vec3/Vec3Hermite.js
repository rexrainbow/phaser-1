import {Hermite as Hermite2} from "../Hermite";
import {Vec3 as Vec32} from "./Vec3";
export function Vec3Hermite(a, b, c, d, t, out = new Vec32()) {
  return out.set(Hermite2(t, a.x, b.x, c.x, d.x), Hermite2(t, a.y, b.y, c.y, d.y), Hermite2(t, a.z, b.z, c.z, d.z));
}
