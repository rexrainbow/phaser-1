import {DistanceSquared as DistanceSquared2} from "./DistanceSquared";
export function Distance(a, b) {
  return Math.sqrt(DistanceSquared2(a, b));
}
