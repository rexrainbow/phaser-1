import { Vec3 } from './Vec3';

export function Vec3FromCylindricalCoords (radius: number, theta: number, y: number, out: Vec3 = new Vec3()): Vec3
{
    return out.set(
        radius * Math.sin(theta),
        y,
        radius * Math.cos(theta)
    );
}
