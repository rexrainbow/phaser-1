import {Matrix2D as Matrix2D2} from "./Matrix2D";
export function Subtract(a, b, out = new Matrix2D2()) {
  return out.set(a.a - b.a, a.b - b.b, a.c - b.c, a.d - b.d, a.tx - b.tx, a.ty - b.ty);
}
