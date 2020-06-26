import { IVec3Like } from './IVec3Like';
import { Vec3 } from './Vec3';

export function DivideScalar (a: IVec3Like, scalar: number, out: Vec3 = new Vec3()): Vec3
{
    const { x, y, z } = a;

    return out.set(
        x / scalar,
        y / scalar,
        z / scalar
    );
}
