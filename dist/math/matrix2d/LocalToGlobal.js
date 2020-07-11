import {Vec2 as Vec22} from "../vec2/Vec2";
export function LocalToGlobal(mat, x, y, out = new Vec22()) {
  const {a, b, c, d, tx, ty} = mat;
  return out.set(a * x + c * y + tx, b * x + d * y + ty);
}
