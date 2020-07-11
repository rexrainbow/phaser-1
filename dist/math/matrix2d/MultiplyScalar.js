import {Matrix2D as Matrix2D2} from "./Matrix2D";
export function MultiplyScalar(target, scalar, out = new Matrix2D2()) {
  const {a, b, c, d, tx, ty} = target;
  return out.set(a * scalar, b * scalar, c * scalar, d * scalar, tx * scalar, ty * scalar);
}
