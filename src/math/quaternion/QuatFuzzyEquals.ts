import { FuzzyEqual } from '../fuzzy/FuzzyEqual';
import { IQuaternionLike } from './IQuaternionLike';

export function QuatFuzzyEquals (a: IQuaternionLike, b: IQuaternionLike, epsilon: number = 0.0001): boolean
{
    return (
        FuzzyEqual(a.x, b.x, epsilon) &&
        FuzzyEqual(a.y, b.y, epsilon) &&
        FuzzyEqual(a.z, b.z, epsilon) &&
        FuzzyEqual(a.w, b.w, epsilon)
    );
}
