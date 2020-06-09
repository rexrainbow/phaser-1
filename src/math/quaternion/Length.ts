import { IQuaternion } from './IQuaternion';

export function Length (a: IQuaternion): number
{
    const { x, y, z, w } = a;

    return Math.sqrt(x * x + y * y + z * z + w * w);
}
