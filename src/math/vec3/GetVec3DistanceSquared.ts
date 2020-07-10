import { IVec3Like } from './IVec3Like';

// Calculates the squared euclidian distance between two vec3s

export function GetVec3DistanceSquared (a: IVec3Like, b: IVec3Like): number
{
    const x = a.x - b.x;
    const y = a.y - b.y;
    const z = a.z - b.z;

    return (x * x) + (y * y) + (z * z);
}
