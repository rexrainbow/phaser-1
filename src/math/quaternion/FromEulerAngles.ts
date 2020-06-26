import { Quaternion } from './Quaternion';
import { RotationYawPitchRoll } from './RotationYawPitchRoll';

export function FromEulerAngles (x: number, y: number, z: number, out: Quaternion = new Quaternion()): Quaternion
{
    return RotationYawPitchRoll(y, x, z, out);
}
