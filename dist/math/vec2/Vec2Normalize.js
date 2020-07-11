import {GetVec2Length as GetVec2Length2} from "./GetVec2Length";
import {Vec2 as Vec22} from "./Vec2";
import {Vec2DivideScalar as Vec2DivideScalar2} from "./Vec2DivideScalar";
export function Vec2Normalize(a, out = new Vec22()) {
  return Vec2DivideScalar2(a, GetVec2Length2(a) || 1, out);
}
