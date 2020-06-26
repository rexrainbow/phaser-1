import { Add } from './Add';
import { IVec3Like } from './IVec3Like';
import { Scale } from './Scale';
import { Vec3 } from './Vec3';

export function RotationFromAxis (axis1: IVec3Like, axis2: IVec3Like, axis3: IVec3Like, out: Vec3 = new Vec3()): Vec3
{
    //  zero out
    return out.set(0, 0, 0);

    //  TODO - Add ones quats are in
}
