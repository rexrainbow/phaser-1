import {CatmullRom as MathCatmullRom} from "../CatmullRom";
import {Vec4 as Vec42} from "./Vec4";
export function CatmullRom(p1, p2, p3, p4, t, out = new Vec42()) {
  return out.set(MathCatmullRom(t, p1.x, p2.x, p3.x, p4.x), MathCatmullRom(t, p1.y, p2.y, p3.y, p4.y), MathCatmullRom(t, p1.z, p2.z, p3.z, p4.z), MathCatmullRom(t, p1.w, p2.w, p3.w, p4.w));
}
