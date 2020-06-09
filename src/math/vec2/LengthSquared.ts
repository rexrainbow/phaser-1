import { IVec2 } from './IVec2';

export function LengthSquared (a: IVec2): number
{
    return (a.x * a.x + a.y * a.y);
}
