import {Matrix4 as Matrix42} from "./Matrix4";
export function FromScaling(vec3, out = new Matrix42()) {
  const {x, y, z} = vec3;
  return out.set(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);
}
