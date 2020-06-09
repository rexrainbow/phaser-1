import { IVec2 } from './IVec2';
import { FuzzyEqual as MathFuzzyEqual } from '../fuzzy/FuzzyEqual';

export function FuzzyEquals (a: IVec2, b: IVec2, epsilon: number = 0.0001): boolean
{
    return MathFuzzyEqual(a.x, b.x, epsilon) && MathFuzzyEqual(a.y, b.y, epsilon);
}
