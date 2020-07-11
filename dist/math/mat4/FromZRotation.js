import {Matrix4 as Matrix42} from "./Matrix4";
export function FromZRotation(angle, out = new Matrix42()) {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return out.set(c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
