import { Dot } from './Dot';
import { IQuaternion } from './IQuaternion';

// Gets the angular distance between two unit quaternions

export function GetAngle (a: IQuaternion, b: IQuaternion): number
{
    const dot = Dot(a, b);

    return Math.acos(2 * dot * dot - 1);
}
