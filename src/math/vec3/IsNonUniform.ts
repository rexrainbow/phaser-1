import { IVec3Like } from './IVec3Like';

// Returns a boolean indicating that the vector is non uniform meaning x, y or z are not all the same.

export function IsNonUniform (a: IVec3Like): boolean
{
    const absX = Math.abs(a.x);
    const absY = Math.abs(a.y);
    const absZ = Math.abs(a.z);

    return (absX !== absY || absX !== absZ || absY !== absZ);
}
