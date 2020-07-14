import { IVec4Like } from './IVec4Like';

// Calculates the squared euclidian distance between two vec3s

export function GetVec4DistanceSquared (a: IVec4Like, b: IVec4Like): number
{
    const x = a.x - b.x;
    const y = a.y - b.y;
    const z = a.z - b.z;
    const w = a.w - b.w;

    return (x * x) + (y * y) + (z * z) + (w * w);
}
