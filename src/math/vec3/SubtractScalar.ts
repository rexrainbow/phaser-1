import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function SubtractScalar (a: IVec3, scalar: number, out: Vec3 = new Vec3()): IVec3
{
    return out.set(
        a.x - scalar,
        a.y - scalar,
        a.z - scalar
    );
}
