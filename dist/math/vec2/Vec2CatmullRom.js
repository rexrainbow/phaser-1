import {CatmullRom as CatmullRom2} from "../CatmullRom";
import {Vec2 as Vec22} from "./Vec2";
export function Vec2CatmullRom(p1, p2, p3, p4, t, out = new Vec22()) {
  return out.set(CatmullRom2(t, p1.x, p2.x, p3.x, p4.x), CatmullRom2(t, p1.y, p2.y, p3.y, p4.y));
}
