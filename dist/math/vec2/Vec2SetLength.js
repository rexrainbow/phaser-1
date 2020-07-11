import {Vec2 as Vec22} from "./Vec2";
import {Vec2Normalize as Vec2Normalize2} from "./Vec2Normalize";
import {Vec2Scale as Vec2Scale2} from "./Vec2Scale";
export function Vec2SetLength(a, length, out = new Vec22()) {
  Vec2Normalize2(a, out);
  return Vec2Scale2(out, length, out);
}
