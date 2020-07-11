import {DivideScalar as DivideScalar2} from "./DivideScalar";
import {Length as Length2} from "./Length";
import {Clamp as MathClamp} from "../Clamp";
import {Scale as Scale2} from "./Scale";
import {Vec4 as Vec42} from "./Vec4";
export function ClampLength(a, min, max, out = new Vec42()) {
  const length = Length2(a);
  DivideScalar2(a, length || 1, out);
  return Scale2(out, MathClamp(min, max, length), out);
}
