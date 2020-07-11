import {Vec3 as Vec32} from "./Vec3";
import {Vec3Normalize as Vec3Normalize2} from "./Vec3Normalize";
import {Vec3Scale as Vec3Scale2} from "./Vec3Scale";
export function Vec3SetLength(a, length, out = new Vec32()) {
  Vec3Normalize2(a, out);
  return Vec3Scale2(out, length, out);
}
