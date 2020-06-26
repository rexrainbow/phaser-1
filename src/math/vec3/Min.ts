import { IVec3Like } from './IVec3Like';
import { Vec3 } from './Vec3';

// Returns the minimum of two vec3's

export function Min (a: IVec3Like, b: IVec3Like, out: Vec3 = new Vec3()): Vec3
{
    const { x: ax, y: ay, z: az } = a;
    const { x: bx, y: by, z: bz } = b;

    return out.set(
        Math.min(ax, bx),
        Math.min(ay, by),
        Math.min(az, bz)
    );
}
