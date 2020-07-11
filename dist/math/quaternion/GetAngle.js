import {Dot as Dot2} from "./Dot";
export function GetAngle(a, b) {
  const dot = Dot2(a, b);
  return Math.acos(2 * dot * dot - 1);
}
