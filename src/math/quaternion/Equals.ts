import { IQuaternionLike } from './IQuaternionLike';

export function Equals (a: IQuaternionLike, b: IQuaternionLike): boolean
{
    return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
}
