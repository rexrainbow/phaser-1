import { IVec2Like } from './IVec2Like';

// Calculates the squared euclidian distance between two vec2s

export function DistanceSquared (a: IVec2Like, b: IVec2Like): number
{
    const x = a.x - b.x;
    const y = a.y - b.y;

    return (x * x) + (y * y);
}
