import { Normalize } from './Normalize';
import { Scale } from './Scale';
import { Vec2 } from './Vec2';

export function SetLength (a: Vec2, length: number, out: Vec2 = new Vec2()): Vec2
{
    Normalize(a, out);

    return Scale(out, length, out);
}
