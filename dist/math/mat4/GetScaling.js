import {Vec3 as Vec32} from "../vec3/Vec3";
export function GetScaling(matrix, out = new Vec32()) {
  const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22] = matrix.data;
  return out.set(Math.hypot(m00, m01, m02), Math.hypot(m10, m11, m12), Math.hypot(m20, m21, m22));
}
