import {Vec3Normalize} from "../vec3/";
import {Quaternion as Quaternion2} from "./Quaternion";
export function FromRotationAxis(axis, angle, out = new Quaternion2()) {
  const sin = Math.sin(angle / 2);
  Vec3Normalize(axis, axis);
  const {x, y, z} = axis;
  return out.set(x * sin, y * sin, z * sin, Math.cos(angle / 2));
}
