import { IQuaternion } from './IQuaternion';

export function Dot (a: IQuaternion, b: IQuaternion): number
{
    return (a.x * b.x) + (a.y * b.y) + (a.z * b.z) + (a.w * b.w);
}
