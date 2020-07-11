import {Matrix2D as Matrix2D2} from "./Matrix2D";
export function MultiplyScalarAndAdd(target, src, scalar, out = new Matrix2D2()) {
  const {a, b, c, d, tx, ty} = src;
  const {a: ta, b: tb, c: tc, d: td, tx: ttx, ty: tty} = target;
  return out.set(ta + a * scalar, tb + b * scalar, tc + c * scalar, td + d * scalar, ttx + tx * scalar, tty + ty * scalar);
}
