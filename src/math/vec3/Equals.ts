import { IVec3Like } from './IVec3Like';

export function Equals (a: IVec3Like, b: IVec3Like): boolean
{
    return a.x === b.x && a.y === b.y && a.z === b.z;
}
