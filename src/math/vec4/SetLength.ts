import { IVec4Like } from './IVec4Like';
import { Normalize } from './Normalize';
import { Scale } from './Scale';
import { Vec4 } from './Vec4';

export function SetLength (a: IVec4Like, length: number, out: Vec4 = new Vec4()): Vec4
{
    Normalize(a, out);

    return Scale(out, length, out);
}
