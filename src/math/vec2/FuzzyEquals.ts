import { IVec2Like } from './IVec2Like';
import { FuzzyEqual as MathFuzzyEqual } from '../fuzzy/FuzzyEqual';

export function FuzzyEquals (a: IVec2Like, b: IVec2Like, epsilon: number = 0.0001): boolean
{
    return MathFuzzyEqual(a.x, b.x, epsilon) && MathFuzzyEqual(a.y, b.y, epsilon);
}
