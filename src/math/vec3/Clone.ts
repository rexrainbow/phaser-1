import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function Clone (source: IVec3): Vec3
{
    const { x, y, z } = source;

    return new Vec3(x, y, z);
}
