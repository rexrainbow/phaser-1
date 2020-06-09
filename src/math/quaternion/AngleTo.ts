import { Clamp } from '../Clamp';
import { Dot } from './Dot';
import { IQuaternion } from './IQuaternion';

export function AngleTo (a: IQuaternion, b: IQuaternion): number
{
    return 2 * Math.acos(Math.abs(Clamp(Dot(a, b), -1, 1)));
}
