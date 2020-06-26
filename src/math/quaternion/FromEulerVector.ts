import { IVec3Like } from '../vec3/IVec3Like';
import { Quaternion } from './Quaternion';
import { RotationYawPitchRoll } from './RotationYawPitchRoll';

export function FromEulerVector (v: IVec3Like, out: Quaternion = new Quaternion()): Quaternion
{
    return RotationYawPitchRoll(v.y, v.x, v.z, out);
}
