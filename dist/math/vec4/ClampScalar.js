import {Clamp as MathClamp} from "../Clamp";
import {Vec4 as Vec42} from "./Vec4";
export function ClampScalar(a, min, max, out = new Vec42()) {
  return out.set(MathClamp(a.x, min, max), MathClamp(a.y, min, max), MathClamp(a.z, min, max), MathClamp(a.w, min, max));
}
