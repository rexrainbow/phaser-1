import {Matrix2D as Matrix2D2} from "./Matrix2D";
export function Skew(target, angleX, angleY, out = new Matrix2D2()) {
  const {a, b, c, d, tx, ty} = target;
  return out.set(a, b + Math.tan(angleX), c + Math.tan(angleY), d, tx, ty);
}
