import { IVec3Like } from './IVec3Like';
import { Vec3 } from './Vec3';

export function Cross (a: IVec3Like, b: IVec3Like, out: Vec3 = new Vec3()): Vec3
{
    const { x: ax, y: ay, z: az } = a;
    const { x: bx, y: by, z: bz } = b;

    return out.set(
        ay * bz - az * by,
        az * bx - ax * bz,
        ax * by - ay * bx
    );
}
