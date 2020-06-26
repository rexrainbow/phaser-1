import { Dot } from './Dot';
import { IQuaternionLike } from './IQuaternionLike';

// Gets the angular distance between two unit quaternions

export function GetAngle (a: IQuaternionLike, b: IQuaternionLike): number
{
    const dot = Dot(a, b);

    return Math.acos(2 * dot * dot - 1);
}
