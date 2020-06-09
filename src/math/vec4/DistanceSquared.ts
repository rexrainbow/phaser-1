import { IVec4 } from './IVec4';

// Calculates the squared euclidian distance between two vec3s

export function DistanceSquared (a: IVec4, b: IVec4): number
{
    const x = a.x - b.x;
    const y = a.y - b.y;
    const z = a.z - b.z;
    const w = a.w - b.w;

    return (x * x) + (y * y) + (z * z) + (w * w);
}
