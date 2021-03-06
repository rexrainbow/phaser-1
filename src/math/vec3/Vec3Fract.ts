import { Vec3 } from './Vec3';

//  Get a Vec3 from a Vec3s floored values

export function Vec3Fract (a: Vec3, out: Vec3 = new Vec3()): Vec3
{
    return out.set(
        a.x - Math.floor(a.x),
        a.y - Math.floor(a.y),
        a.z - Math.floor(a.z)
    );
}
