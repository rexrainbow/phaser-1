import {Matrix2D as Matrix2D2} from "./Matrix2D";
export function Translate(target, x, y, out = new Matrix2D2()) {
  const {a, b, c, d, tx, ty} = target;
  out.tx = a * x + c * y + tx;
  out.ty = b * x + d * y + ty;
  return out;
}
