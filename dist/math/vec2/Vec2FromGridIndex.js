import {Vec2 as Vec22} from "./Vec2";
export function Vec2FromGridIndex(index, width, height, out = new Vec22()) {
  let x = 0;
  let y = 0;
  const total = width * height;
  if (index > 0 && index <= total) {
    if (index > width - 1) {
      y = Math.floor(index / width);
      x = index - y * width;
    } else {
      x = index;
    }
    out.set(x, y);
  }
  return out;
}
