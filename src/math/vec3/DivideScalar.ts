import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function DivideScalar (a: IVec3, scalar: number, out: Vec3 = new Vec3()): IVec3
{
    const { x, y, z } = a;

    return out.set(
        x / scalar,
        y / scalar,
        z / scalar
    );
}
