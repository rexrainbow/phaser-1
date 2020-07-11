import {Normalize as Normalize2} from "./Normalize";
import {Scale as Scale2} from "./Scale";
import {Vec4 as Vec42} from "./Vec4";
export function SetLength(a, length, out = new Vec42()) {
  Normalize2(a, out);
  return Scale2(out, length, out);
}
