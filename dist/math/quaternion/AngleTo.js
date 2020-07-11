import {Clamp as Clamp2} from "../Clamp";
import {Dot as Dot2} from "./Dot";
export function AngleTo(a, b) {
  return 2 * Math.acos(Math.abs(Clamp2(Dot2(a, b), -1, 1)));
}
