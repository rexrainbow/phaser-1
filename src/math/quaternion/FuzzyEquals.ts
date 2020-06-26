import { IQuaternionLike } from './IQuaternionLike';
import { FuzzyEqual as MathFuzzyEqual } from '../fuzzy/FuzzyEqual';

export function FuzzyEquals (a: IQuaternionLike, b: IQuaternionLike, epsilon: number = 0.0001): boolean
{
    return (
        MathFuzzyEqual(a.x, b.x, epsilon) &&
        MathFuzzyEqual(a.y, b.y, epsilon) &&
        MathFuzzyEqual(a.z, b.z, epsilon) &&
        MathFuzzyEqual(a.w, b.w, epsilon)
    );
}
