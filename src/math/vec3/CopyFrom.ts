import { IVec3 } from './IVec3';

export function CopyFrom (source: IVec3, dest: IVec3): IVec3
{
    const { x, y, z } = source;

    return dest.set(x, y, z);
}
