import { IVec2 } from './IVec2';

export function Length (a: IVec2): number
{
    return Math.sqrt(a.x * a.x + a.y * a.y);
}
