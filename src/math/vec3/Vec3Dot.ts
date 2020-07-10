import { IVec3Like } from './IVec3Like';

export function Vec3Dot (a: IVec3Like, b: IVec3Like): number
{
    return a.x * b.x + a.y * b.y + a.z * b.z;
}
