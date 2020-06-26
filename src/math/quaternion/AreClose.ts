import { Dot } from './Dot';
import { IQuaternionLike } from './IQuaternionLike';

export function AreClose (a: IQuaternionLike, b: IQuaternionLike): boolean
{
    return (Dot(a, b) >= 0);
}
