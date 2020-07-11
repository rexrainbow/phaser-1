import {Matrix4 as Matrix42} from "./Matrix4";
export function FromTranslation(vec3, out = new Matrix42()) {
  const {x, y, z} = vec3;
  return out.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1);
}
