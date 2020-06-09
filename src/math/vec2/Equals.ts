import { IVec2 } from './IVec2';

export function Equals (a: IVec2, b: IVec2): boolean
{
    return a.x === b.x && a.y === b.y;
}
