import {DivideScalar as DivideScalar2} from "./DivideScalar";
import {Length as Length2} from "./Length";
import {Vec4 as Vec42} from "./Vec4";
export function Normalize(a, out = new Vec42()) {
  return DivideScalar2(a, Length2(a) || 1, out);
}
