import { Add } from './Add';
import { IVec2 } from './IVec2';
import { Scale } from './Scale';
import { Vec2 } from './Vec2';

export function Center (a: IVec2, b: IVec2, out: Vec2 = new Vec2()): IVec2
{
    Add(a, b, out);

    return Scale(out, 0.5, out);
}
