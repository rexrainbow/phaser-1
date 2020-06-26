import { Add } from './Add';
import { IVec4Like } from './IVec4Like';
import { Scale } from './Scale';
import { Vec4 } from './Vec4';

export function Center (a: IVec4Like, b: IVec4Like, out: Vec4 = new Vec4()): Vec4
{
    Add(a, b, out);

    return Scale(out, 0.5, out);
}
