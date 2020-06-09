import { IQuaternion } from './IQuaternion';

export function LengthSquared (a: IQuaternion): number
{
    const { x, y, z, w } = a;

    return x * x + y * y + z * z + w * w;
}
