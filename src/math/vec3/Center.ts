import { Add } from './Add';
import { Scale } from './Scale';
import { Vec3 } from './Vec3';

export function Center (a: Vec3, b: Vec3, out: Vec3 = new Vec3()): Vec3
{
    Add(a, b, out);

    return Scale(out, 0.5, out);
}
