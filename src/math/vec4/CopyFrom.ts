import { IVec4 } from './IVec4';

export function CopyFrom (source: IVec4, dest: IVec4): IVec4
{
    const { x, y, z, w } = source;

    return dest.set(x, y, z, w);
}
