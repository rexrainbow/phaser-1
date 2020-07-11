import {GetVec2DistanceSquared as GetVec2DistanceSquared2} from "./GetVec2DistanceSquared";
export function GetVec2Distance(a, b) {
  return Math.sqrt(GetVec2DistanceSquared2(a, b));
}
