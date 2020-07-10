import { Vec3 } from './Vec3';

// Returns the maximum of two vec3's

export function Vec3Max (a: Vec3, b: Vec3, out: Vec3 = new Vec3()): Vec3
{
    const { x: ax, y: ay, z: az } = a;
    const { x: bx, y: by, z: bz } = b;

    return out.set(
        Math.max(ax, bx),
        Math.max(ay, by),
        Math.max(az, bz)
    );
}
