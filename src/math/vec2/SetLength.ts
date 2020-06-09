import { IVec2 } from './IVec2';
import { Normalize } from './Normalize';
import { Scale } from './Scale';
import { Vec2 } from './Vec2';

export function SetLength (a: IVec2, length: number, out: Vec2 = new Vec2()): IVec2
{
    Normalize(a, out);

    return Scale(out, length, out);
}
