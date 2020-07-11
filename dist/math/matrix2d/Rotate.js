import {Matrix2D as Matrix2D2} from "./Matrix2D";
export function Rotate(target, angle, out = new Matrix2D2()) {
  const {a, b, c, d, tx, ty} = target;
  const sin = Math.sin(angle);
  const cos = Math.cos(angle);
  return out.set(a * cos + c * sin, b * cos + d * sin, a * -sin + c * cos, b * -sin + d * cos, tx, ty);
}
