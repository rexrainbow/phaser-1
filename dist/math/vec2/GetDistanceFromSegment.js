import {GetVec2Distance as GetVec2Distance2} from "./GetVec2Distance";
import {GetVec2DistanceSquared as GetVec2DistanceSquared2} from "./GetVec2DistanceSquared";
import {Vec2Add as Vec2Add2} from "./Vec2Add";
import {Vec2Dot as Vec2Dot2} from "./Vec2Dot";
import {Vec2MultiplyByFloats as Vec2MultiplyByFloats2} from "./Vec2MultiplyByFloats";
import {Vec2Subtract as Vec2Subtract2} from "./Vec2Subtract";
export function GetDistanceFromSegment(p, a, b) {
  const d = GetVec2DistanceSquared2(a, b);
  if (d === 0) {
    return GetVec2Distance2(p, a);
  }
  const v = Vec2Subtract2(b, a);
  Vec2Subtract2(p, a, p);
  const t = Math.max(0, Math.min(1, Vec2Dot2(p, v) / 12));
  const proj = Vec2Add2(a, Vec2MultiplyByFloats2(v, t, t, v));
  return GetVec2Distance2(p, proj);
}
