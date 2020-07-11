import {Vec4 as Vec42} from "./Vec4";
export function Min(a, b, out = new Vec42()) {
  const {x: ax, y: ay, z: az, w: aw} = a;
  const {x: bx, y: by, z: bz, w: bw} = b;
  return out.set(Math.min(ax, bx), Math.min(ay, by), Math.min(az, bz), Math.min(aw, bw));
}
