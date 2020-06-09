import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

// Returns the minimum of two vec3's

export function Min (a: IVec3, b: IVec3, out: Vec3 = new Vec3()): IVec3
{
    const { x: ax, y: ay, z: az } = a;
    const { x: bx, y: by, z: bz } = b;

    return out.set(
        Math.min(ax, bx),
        Math.min(ay, by),
        Math.min(az, bz)
    );
}
