import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function RotateY (a: IVec3, origin: IVec3, angle: number, out: Vec3 = new Vec3()): IVec3
{
    const { x: ax, y: ay, z: az } = a;
    const { x: bx, y: by, z: bz } = origin;

    const px = ax - bx;
    const py = ay - by;
    const pz = az - bz;

    const rx = pz * Math.sin(angle) + px * Math.cos(angle);
    const ry = py;
    const rz = pz * Math.cos(angle) - px * Math.sin(angle);

    return out.set(
        rx + bx,
        ry + by,
        rz + bz
    );
}
