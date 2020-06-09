import { IVec4 } from './IVec4';
import { Normalize } from './Normalize';
import { Scale } from './Scale';
import { Vec4 } from './Vec4';

export function SetLength (a: IVec4, length: number, out: Vec4 = new Vec4()): IVec4
{
    Normalize(a, out);

    return Scale(out, length, out);
}
