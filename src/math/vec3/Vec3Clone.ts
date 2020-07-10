import { IVec3Like } from './IVec3Like';
import { Vec3 } from './Vec3';

export function Vec3Clone (source: IVec3Like): Vec3
{
    const { x, y, z } = source;

    return new Vec3(x, y, z);
}
