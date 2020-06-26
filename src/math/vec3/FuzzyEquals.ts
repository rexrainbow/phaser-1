import { IVec3Like } from './IVec3Like';
import { FuzzyEqual as MathFuzzyEqual } from '../fuzzy/FuzzyEqual';

export function FuzzyEquals (a: IVec3Like, b: IVec3Like, epsilon: number = 0.0001): boolean
{
    return MathFuzzyEqual(a.x, b.x, epsilon) && MathFuzzyEqual(a.y, b.y, epsilon) && MathFuzzyEqual(a.z, b.z, epsilon);
}
