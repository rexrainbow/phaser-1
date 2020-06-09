import { IVec3 } from './IVec3';

// Calculates the squared euclidian distance between two vec3s

export function DistanceSquared (a: IVec3, b: IVec3): number
{
    const x = a.x - b.x;
    const y = a.y - b.y;
    const z = a.z - b.z;

    return (x * x) + (y * y) + (z * z);
}
