import {Quaternion as Quaternion2} from "./Quaternion";
import {RotationYawPitchRoll as RotationYawPitchRoll2} from "./RotationYawPitchRoll";
export function FromEulerVector(v, out = new Quaternion2()) {
  return RotationYawPitchRoll2(v.y, v.x, v.z, out);
}
