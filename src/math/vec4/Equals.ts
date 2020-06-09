import { IVec4 } from './IVec4';

export function Equals (a: IVec4, b: IVec4): boolean
{
    return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
}
