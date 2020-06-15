import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function RotateZ (a: IVec3, origin: IVec3, angle: number, out: Vec3 = new Vec3()): IVec3
{
    const { x: ax, y: ay, z: az } = a;
    const { x: bx, y: by, z: bz } = origin;

    const px = ax - bx;
    const py = ay - by;
    const pz = az - bz;

    const rx = px * Math.cos(angle) - py * Math.sin(angle);
    const ry = px * Math.sin(angle) + py * Math.cos(angle);
    const rz = pz;

    return out.set(
        rx + bx,
        ry + by,
        rz + bz
    );
}
