import { Add } from './Add';
import { IVec3Like } from './IVec3Like';
import { Scale } from './Scale';
import { Vec3 } from './Vec3';

export function Center (a: IVec3Like, b: IVec3Like, out: Vec3 = new Vec3()): Vec3
{
    Add(a, b, out);

    return Scale(out, 0.5, out);
}
