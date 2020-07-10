import { FuzzyEqual } from '../fuzzy/FuzzyEqual';
import { IVec3Like } from './IVec3Like';

export function Vec3FuzzyEquals (a: IVec3Like, b: IVec3Like, epsilon: number = 0.0001): boolean
{
    return FuzzyEqual(a.x, b.x, epsilon) && FuzzyEqual(a.y, b.y, epsilon) && FuzzyEqual(a.z, b.z, epsilon);
}
