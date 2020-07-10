import { Vec3 } from './Vec3';

// Returns the minimum of two vec3's

export function Vec3Min (a: Vec3, b: Vec3, out: Vec3 = new Vec3()): Vec3
{
    const { x: ax, y: ay, z: az } = a;
    const { x: bx, y: by, z: bz } = b;

    return out.set(
        Math.min(ax, bx),
        Math.min(ay, by),
        Math.min(az, bz)
    );
}
