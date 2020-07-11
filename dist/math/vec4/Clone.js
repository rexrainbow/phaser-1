import {Vec4 as Vec42} from "./Vec4";
export function Clone(source) {
  const {x, y, z, w} = source;
  return new Vec42(x, y, z, w);
}
