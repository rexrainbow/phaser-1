import { IQuaternionLike } from './IQuaternionLike';

export function QuatEquals (a: IQuaternionLike, b: IQuaternionLike): boolean
{
    return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
}
