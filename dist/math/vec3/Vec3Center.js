import {Vec3 as Vec32} from "./Vec3";
import {Vec3Add as Vec3Add2} from "./Vec3Add";
import {Vec3Scale as Vec3Scale2} from "./Vec3Scale";
export function Vec3Center(a, b, out = new Vec32()) {
  Vec3Add2(a, b, out);
  return Vec3Scale2(out, 0.5, out);
}
