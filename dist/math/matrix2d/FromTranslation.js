import {Matrix2D as Matrix2D2} from "../matrix2d/Matrix2D";
import {Translate as Translate2} from "./Translate";
export function FromTranslation(x, y) {
  const target = new Matrix2D2();
  return Translate2(target, x, y, target);
}
