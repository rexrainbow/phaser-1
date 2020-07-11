import {CopyFrom as CopyFrom2} from "./CopyFrom";
import {GetAngle as GetAngle2} from "./GetAngle";
import {Quaternion as Quaternion2} from "./Quaternion";
import {Slerp as Slerp2} from "./Slerp";
export function RotateTowards(a, b, step, out = new Quaternion2()) {
  const angle = GetAngle2(a, b);
  if (angle === 0) {
    return CopyFrom2(a, out);
  }
  const t = Math.min(1, step / angle);
  return Slerp2(a, b, t, out);
}
