import { Clamp } from '../Clamp';
import { IQuaternionLike } from './IQuaternionLike';
import { QuatDot } from './QuatDot';

export function GetQuatAngleTo (a: IQuaternionLike, b: IQuaternionLike): number
{
    return 2 * Math.acos(Math.abs(Clamp(QuatDot(a, b), -1, 1)));
}
