import { Add } from './Add';
import { IVec2Like } from './IVec2Like';
import { Scale } from './Scale';
import { Vec2 } from './Vec2';

export function Center (a: IVec2Like, b: IVec2Like, out: Vec2 = new Vec2()): Vec2
{
    Add(a, b, out);

    return Scale(out, 0.5, out);
}
