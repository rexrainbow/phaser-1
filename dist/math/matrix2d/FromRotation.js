import {Matrix2D as Matrix2D2} from "../matrix2d/Matrix2D";
import {Rotate as Rotate2} from "./Rotate";
export function FromRotation(angle) {
  const target = new Matrix2D2();
  return Rotate2(target, angle, target);
}
