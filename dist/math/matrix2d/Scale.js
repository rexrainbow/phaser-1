import {Matrix2D as Matrix2D2} from "./Matrix2D";
export function Scale(target, scaleX, scaleY, out = new Matrix2D2()) {
  const {a, b, c, d, tx, ty} = target;
  return out.set(a * scaleX, b * scaleX, c * scaleY, d * scaleY, tx, ty);
}
