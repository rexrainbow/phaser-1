import { Add } from './Add';
import { Scale } from './Scale';
import { Vec2 } from './Vec2';

export function Center (a: Vec2, b: Vec2, out: Vec2 = new Vec2()): Vec2
{
    Add(a, b, out);

    return Scale(out, 0.5, out);
}
