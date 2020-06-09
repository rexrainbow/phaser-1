import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

export function SetFromCylindricalCoords (radius: number, theta: number, y: number, out: IVec3 = new Vec3()): IVec3
{
    return out.set(
        radius * Math.sin(theta),
        y,
        radius * Math.cos(theta)
    );
}
