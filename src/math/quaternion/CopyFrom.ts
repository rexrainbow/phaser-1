import { IQuaternion } from './IQuaternion';

export function CopyFrom (source: IQuaternion, dest: IQuaternion): IQuaternion
{
    const { x, y, z, w } = source;

    return dest.set(x, y, z, w);
}
