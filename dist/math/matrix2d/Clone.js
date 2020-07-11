import {Matrix2D as Matrix2D2} from "../matrix2d/Matrix2D";
export function Clone(src) {
  return new Matrix2D2(src.a, src.b, src.c, src.d, src.tx, src.ty);
}
