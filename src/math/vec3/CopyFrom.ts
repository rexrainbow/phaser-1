import { IVec3 } from './IVec3';

export function CopyFrom (source: IVec3, dest: IVec3): IVec3
{
    return dest.set(source.x, source.y, source.z);
}
