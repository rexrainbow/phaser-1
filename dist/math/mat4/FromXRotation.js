import {Matrix4 as Matrix42} from "./Matrix4";
export function FromXRotation(angle, out = new Matrix42()) {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return out.set(1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1);
}
