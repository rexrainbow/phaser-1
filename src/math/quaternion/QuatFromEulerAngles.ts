import { QuatRotationYawPitchRoll } from './QuatRotationYawPitchRoll';
import { Quaternion } from './Quaternion';

export function QuatFromEulerAngles (x: number, y: number, z: number, out: Quaternion = new Quaternion()): Quaternion
{
    return QuatRotationYawPitchRoll(y, x, z, out);
}
