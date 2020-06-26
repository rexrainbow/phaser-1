import { Clamp } from '../Clamp';
import { Dot } from './Dot';
import { IQuaternionLike } from './IQuaternionLike';

export function AngleTo (a: IQuaternionLike, b: IQuaternionLike): number
{
    return 2 * Math.acos(Math.abs(Clamp(Dot(a, b), -1, 1)));
}
