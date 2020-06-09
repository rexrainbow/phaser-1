import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function ScaleAndAdd (a: IVec3, b: IVec3, scalar: number, out: Vec3 = new Vec3()): IVec3
{
    return out.set(
        a.x + b.x * scalar,
        a.y + b.y * scalar,
        a.z + b.z * scalar
    );
}
