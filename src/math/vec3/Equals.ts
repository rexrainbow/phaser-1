import { IVec3 } from './IVec3';

export function Equals (a: IVec3, b: IVec3): boolean
{
    return a.x === b.x && a.y === b.y && a.z === b.z;
}
