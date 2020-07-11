import {CatmullRom as CatmullRom2} from "../CatmullRom";
import {Vec3 as Vec32} from "./Vec3";
export function Vec3CatmullRom(p1, p2, p3, p4, t, out = new Vec32()) {
  return out.set(CatmullRom2(t, p1.x, p2.x, p3.x, p4.x), CatmullRom2(t, p1.y, p2.y, p3.y, p4.y), CatmullRom2(t, p1.z, p2.z, p3.z, p4.z));
}
