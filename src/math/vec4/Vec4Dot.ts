import { IVec4Like } from './IVec4Like';

export function Vec4Dot (a: IVec4Like, b: IVec4Like): number
{
    return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
}
