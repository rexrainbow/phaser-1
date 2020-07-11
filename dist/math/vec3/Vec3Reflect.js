import {Vec3 as Vec32} from "./Vec3";
import {Vec3Dot as Vec3Dot2} from "./Vec3Dot";
import {Vec3Scale as Vec3Scale2} from "./Vec3Scale";
import {Vec3Subtract as Vec3Subtract2} from "./Vec3Subtract";
export function Vec3Reflect(a, normal, out = new Vec32()) {
  Vec3Scale2(normal, 2 * Vec3Dot2(a, normal), out);
  return Vec3Subtract2(a, out, out);
}
