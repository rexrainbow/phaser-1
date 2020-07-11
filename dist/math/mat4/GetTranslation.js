import {Vec3 as Vec32} from "../vec3/Vec3";
export function GetTranslation(matrix, out = new Vec32()) {
  const data = matrix.data;
  return out.set(data[12], data[13], data[14]);
}
