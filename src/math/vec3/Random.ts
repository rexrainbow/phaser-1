import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function Random (a: IVec3, scale: number = 1, out: Vec3 = new Vec3()): IVec3
{
    const r = Math.random() * 2 * Math.PI;
    const z = Math.random() * 2 - 1;
    const zScale = Math.sqrt(1 - z * z) * scale;

    return out.set(
        Math.cos(r) * zScale,
        Math.sin(r) * zScale,
        z * scale
    );
}
