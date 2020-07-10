import { FuzzyEqual } from '../fuzzy/FuzzyEqual';
import { IVec2Like } from './IVec2Like';

export function Vec2FuzzyEquals (a: IVec2Like, b: IVec2Like, epsilon: number = 0.0001): boolean
{
    return FuzzyEqual(a.x, b.x, epsilon) && FuzzyEqual(a.y, b.y, epsilon);
}
