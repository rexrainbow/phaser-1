import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function Cross (a: IVec3, b: IVec3, out: IVec3 = new Vec3()): IVec3
{
    const { x: ax, y: ay, z: az } = a;
    const { x: bx, y: by, z: bz } = b;

    return out.set(
        ay * bz - az * by,
        az * bx - ax * bz,
        ax * by - ay * bx
    );
}
