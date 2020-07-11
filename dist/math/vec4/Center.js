import {Add as Add2} from "./Add";
import {Scale as Scale2} from "./Scale";
import {Vec4 as Vec42} from "./Vec4";
export function Center(a, b, out = new Vec42()) {
  Add2(a, b, out);
  return Scale2(out, 0.5, out);
}
