import { IVec3Like } from '../vec3/IVec3Like';
import { QuatRotationYawPitchRoll } from './QuatRotationYawPitchRoll';
import { Quaternion } from './Quaternion';

export function QuatFromEulerVector (v: IVec3Like, out: Quaternion = new Quaternion()): Quaternion
{
    return QuatRotationYawPitchRoll(v.y, v.x, v.z, out);
}
