import { Add } from './Add';
import { IVec4 } from './IVec4';
import { Scale } from './Scale';
import { Vec4 } from './Vec4';

export function Center (a: IVec4, b: IVec4, out: Vec4 = new Vec4()): IVec4
{
    Add(a, b, out);

    return Scale(out, 0.5, out);
}
