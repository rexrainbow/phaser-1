import { Vec4 } from './Vec4';

// Returns the maximum of two vec4's

export function Vec4Max (a: Vec4, b: Vec4, out: Vec4 = new Vec4()): Vec4
{
    const { x: ax, y: ay, z: az, w: aw } = a;
    const { x: bx, y: by, z: bz, w: bw } = b;

    return out.set(
        Math.max(ax, bx),
        Math.max(ay, by),
        Math.max(az, bz),
        Math.max(aw, bw)
    );
}
