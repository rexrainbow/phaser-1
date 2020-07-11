import {Clamp as MathClamp} from "../Clamp";
import {Vec4 as Vec42} from "./Vec4";
export function Clamp(a, min, max, out = new Vec42()) {
  return out.set(MathClamp(a.x, min.x, max.x), MathClamp(a.y, min.y, max.y), MathClamp(a.z, min.z, max.z), MathClamp(a.w, min.w, max.w));
}
