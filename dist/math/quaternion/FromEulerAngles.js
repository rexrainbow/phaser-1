import {Quaternion as Quaternion2} from "./Quaternion";
import {RotationYawPitchRoll as RotationYawPitchRoll2} from "./RotationYawPitchRoll";
export function FromEulerAngles(x, y, z, out = new Quaternion2()) {
  return RotationYawPitchRoll2(y, x, z, out);
}
