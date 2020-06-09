import { IVec4 } from './IVec4';
import { Vec4 } from './Vec4';

// Returns the maximum of two vec4's

export function Max (a: IVec4, b: IVec4, out: Vec4 = new Vec4()): IVec4
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
