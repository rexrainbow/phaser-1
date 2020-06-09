import { IVec3 } from './IVec3';

export function Dot (a: IVec3, b: IVec3): number
{
    return a.x * b.x + a.y * b.y + a.z * b.z;
}
