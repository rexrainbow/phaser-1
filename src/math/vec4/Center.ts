import { Add } from './Add';
import { Scale } from './Scale';
import { Vec4 } from './Vec4';

export function Center (a: Vec4, b: Vec4, out: Vec4 = new Vec4()): Vec4
{
    Add(a, b, out);

    return Scale(out, 0.5, out);
}
