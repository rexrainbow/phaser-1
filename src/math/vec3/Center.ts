import { Add } from './Add';
import { IVec3 } from './IVec3';
import { Scale } from './Scale';
import { Vec3 } from './Vec3';

export function Center (a: IVec3, b: IVec3, out: Vec3 = new Vec3()): IVec3
{
    Add(a, b, out);

    return Scale(out, 0.5, out);
}
