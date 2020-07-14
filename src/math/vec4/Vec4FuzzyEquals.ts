import { FuzzyEqual } from '../fuzzy/FuzzyEqual';
import { IVec4Like } from './IVec4Like';

export function Vec4FuzzyEquals (a: IVec4Like, b: IVec4Like, epsilon: number = 0.0001): boolean
{
    return (
        FuzzyEqual(a.x, b.x, epsilon) &&
        FuzzyEqual(a.y, b.y, epsilon) &&
        FuzzyEqual(a.z, b.z, epsilon) &&
        FuzzyEqual(a.w, b.w, epsilon)
    );
}
