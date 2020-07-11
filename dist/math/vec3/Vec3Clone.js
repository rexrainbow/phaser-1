import {Vec3 as Vec32} from "./Vec3";
export function Vec3Clone(source) {
  const {x, y, z} = source;
  return new Vec32(x, y, z);
}
