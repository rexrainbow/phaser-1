import { IVec3Like } from './IVec3Like';
import { Vec3 } from './Vec3';

export function Vec3CopyFrom (source: IVec3Like, dest: Vec3): Vec3
{
    const { x, y, z } = source;

    return dest.set(x, y, z);
}
