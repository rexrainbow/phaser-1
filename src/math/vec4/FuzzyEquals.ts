import { IVec4Like } from './IVec4Like';
import { FuzzyEqual as MathFuzzyEqual } from '../fuzzy/FuzzyEqual';

export function FuzzyEquals (a: IVec4Like, b: IVec4Like, epsilon: number = 0.0001): boolean
{
    return (
        MathFuzzyEqual(a.x, b.x, epsilon) &&
        MathFuzzyEqual(a.y, b.y, epsilon) &&
        MathFuzzyEqual(a.z, b.z, epsilon) &&
        MathFuzzyEqual(a.w, b.w, epsilon)
    );
}
