import {Vec2 as Vec22} from "./Vec2";
import {Vec2Add as Vec2Add2} from "./Vec2Add";
import {Vec2Scale as Vec2Scale2} from "./Vec2Scale";
export function Vec2Center(a, b, out = new Vec22()) {
  Vec2Add2(a, b, out);
  return Vec2Scale2(out, 0.5, out);
}
