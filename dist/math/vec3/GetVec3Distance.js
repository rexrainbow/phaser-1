import {GetVec3DistanceSquared as GetVec3DistanceSquared2} from "./GetVec3DistanceSquared";
export function GetVec3Distance(a, b) {
  return Math.sqrt(GetVec3DistanceSquared2(a, b));
}
