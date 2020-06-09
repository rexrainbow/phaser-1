import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function Clone (source: IVec3): Vec3
{
    return new Vec3(source.x, source.y, source.z);
}
