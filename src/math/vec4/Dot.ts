import { IVec4 } from './IVec4';

export function Dot (a: IVec4, b: IVec4): number
{
    return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
}
