import { IVec4Like } from './IVec4Like';

export function Vec4Equals (a: IVec4Like, b: IVec4Like): boolean
{
    return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
}
