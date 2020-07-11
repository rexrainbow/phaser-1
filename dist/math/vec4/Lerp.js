import {Vec4 as Vec42} from "./Vec4";
export function Lerp(a, b, t, out = new Vec42()) {
  const {x, y, z, w} = a;
  return out.set(x + t * (b.x - x), y + t * (b.y - y), z + t * (b.z - z), w + t * (b.w - w));
}
