import {Matrix2D as Matrix2D2} from "../matrix2d/Matrix2D";
import {Scale as Scale2} from "./Scale";
export function FromScaling(scaleX, scaleY = scaleX) {
  const target = new Matrix2D2();
  return Scale2(target, scaleX, scaleY, target);
}
