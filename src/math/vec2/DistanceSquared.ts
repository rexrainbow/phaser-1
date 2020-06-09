import { IVec2 } from './IVec2';

// Calculates the squared euclidian distance between two vec2s

export function DistanceSquared (a: IVec2, b: IVec2): number
{
    const x = a.x - b.x;
    const y = a.y - b.y;

    return (x * x) + (y * y);
}
