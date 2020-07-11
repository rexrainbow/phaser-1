import {Length as Length2} from "./Length";
import {Quaternion as Quaternion2} from "./Quaternion";
import {Scale as Scale2} from "./Scale";
export function Normalize(a, out = new Quaternion2()) {
  const length = Length2(a);
  if (length === 0) {
    return out.set(0, 0, 0, 1);
  } else {
    return Scale2(a, length, out);
  }
}
