import { IVec3 } from './IVec3';
import { FuzzyEqual as MathFuzzyEqual } from '../fuzzy/FuzzyEqual';

export function FuzzyEquals (a: IVec3, b: IVec3, epsilon: number = 0.0001): boolean
{
    return MathFuzzyEqual(a.x, b.x, epsilon) && MathFuzzyEqual(a.y, b.y, epsilon) && MathFuzzyEqual(a.z, b.z, epsilon);
}
