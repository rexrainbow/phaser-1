import {Quaternion as Quaternion2} from "./Quaternion";
export function Clone(source) {
  const {x, y, z, w} = source;
  return new Quaternion2(x, y, z, w);
}
