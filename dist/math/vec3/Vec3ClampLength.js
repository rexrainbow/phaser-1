import {Clamp as Clamp2} from "../Clamp";
import {GetVec3Length as GetVec3Length2} from "./GetVec3Length";
import {Vec3 as Vec32} from "./Vec3";
import {Vec3DivideScalar as Vec3DivideScalar2} from "./Vec3DivideScalar";
import {Vec3Scale as Vec3Scale2} from "./Vec3Scale";
export function Vec3ClampLength(a, min, max, out = new Vec32()) {
  const length = GetVec3Length2(a);
  Vec3DivideScalar2(a, length || 1, out);
  return Vec3Scale2(out, Clamp2(min, max, length), out);
}
