import { IVec3 } from './IVec3';
import { Vec3 } from './Vec3';

// t - interpolation amount, in the range [0-1], between the two inputs

export function Lerp (a: IVec3, b: IVec3, t: number, out: Vec3 = new Vec3()): IVec3
{
    const { x, y, z } = a;

    return out.set(
        x + t * (b.x - x),
        y + t * (b.y - y),
        z + t * (b.z - z)
    );
}
