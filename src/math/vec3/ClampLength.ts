import { IVec3 } from './IVec3';
import { Clamp as MathClamp } from '../Clamp';
import { Vec3 } from './Vec3';

export function ClampLength (a: IVec3, min: IVec3, max: IVec3, out: Vec3 = new Vec3()): IVec3
{
    // assumes min < max, componentwise
    // const length =


    return out.set(
        MathClamp(a.x, min.x, max.x),
        MathClamp(a.y, min.y, max.y),
        MathClamp(a.z, min.z, max.z)
    );
}
