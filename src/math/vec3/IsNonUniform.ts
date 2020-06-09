import { IVec3 } from './IVec3';

// Returns a boolean indicating that the vector is non uniform meaning x, y or z are not all the same.

export function IsNonUniform (a: IVec3): boolean
{
    const absX = Math.abs(a.x);
    const absY = Math.abs(a.y);
    const absZ = Math.abs(a.z);

    return (absX !== absY || absX !== absZ || absY !== absZ);
}
