import { IVec2 } from './IVec2';
import { Vec2 } from './Vec2';

// t - interpolation amount, in the range [0-1], between the two inputs

export function Lerp (a: IVec2, b: IVec2, t: number, out: Vec2 = new Vec2()): IVec2
{
    const x = a.x;
    const y = a.y;

    return out.set(
        x + t * (b.x - x),
        y + t * (b.y - y)
    );
}
