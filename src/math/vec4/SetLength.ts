import { Normalize } from './Normalize';
import { Scale } from './Scale';
import { Vec4 } from './Vec4';

export function SetLength (a: Vec4, length: number, out: Vec4 = new Vec4()): Vec4
{
    Normalize(a, out);

    return Scale(out, length, out);
}
