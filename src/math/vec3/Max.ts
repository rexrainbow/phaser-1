import { IVec3Like } from './IVec3Like';
import { Vec3 } from './Vec3';

// Returns the maximum of two vec3's

export function Max (a: IVec3Like, b: IVec3Like, out: Vec3 = new Vec3()): Vec3
{
    const { x: ax, y: ay, z: az } = a;
    const { x: bx, y: by, z: bz } = b;

    return out.set(
        Math.max(ax, bx),
        Math.max(ay, by),
        Math.max(az, bz)
    );
}
