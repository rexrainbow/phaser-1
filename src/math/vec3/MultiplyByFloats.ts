import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function MultiplyByFloats (a: IVec3, x: number, y: number, z: number, out: Vec3 = new Vec3()): IVec3
{
    return out.set(
        a.x * x,
        a.y * y,
        a.z * z
    );
}
