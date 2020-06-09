import { IQuaternion } from './IQuaternion';
import { Quaternion } from './Quaternion';

export function Clone (source: IQuaternion): Quaternion
{
    const { x, y, z, w } = source;

    return new Quaternion(x, y, z, w);
}
