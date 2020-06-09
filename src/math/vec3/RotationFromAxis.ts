import { Add } from './Add';
import { IVec3 } from './IVec3';
import { Scale } from './Scale';
import { Vec3 } from './Vec3';

export function RotationFromAxis (axis1: IVec3, axis2: IVec3, axis3: IVec3, out: Vec3 = new Vec3()): IVec3
{
    //  zero out
    out.set(0, 0, 0);

    //  TODO - Add ones quats are in
}
