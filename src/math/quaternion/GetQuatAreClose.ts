import { IQuaternionLike } from './IQuaternionLike';
import { QuatDot } from './QuatDot';

export function GetQuatAreClose (a: IQuaternionLike, b: IQuaternionLike): boolean
{
    return (QuatDot(a, b) >= 0);
}
