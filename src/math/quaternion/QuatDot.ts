import { IQuaternionLike } from './IQuaternionLike';

export function QuatDot (a: IQuaternionLike, b: IQuaternionLike): number
{
    return (a.x * b.x) + (a.y * b.y) + (a.z * b.z) + (a.w * b.w);
}
