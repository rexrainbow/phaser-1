import { IVec2 } from './IVec2';

export function Dot (a: IVec2, b: IVec2): number
{
    return a.x * b.x + a.y * b.y;
}
