import { IQuaternionLike } from './IQuaternionLike';
import { QuatDot } from './QuatDot';

// Gets the angular distance between two unit quaternions

export function GetQuatAngle (a: IQuaternionLike, b: IQuaternionLike): number
{
    const dot = QuatDot(a, b);

    return Math.acos(2 * dot * dot - 1);
}
